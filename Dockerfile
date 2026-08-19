# Stage 1: Build
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine AS production

COPY --from=builder /app/dist /usr/share/nginx/html

# nginx config to support client-side routing (React Router) + API proxy
RUN printf 'server {\n\
    listen 80;\n\
    resolver 127.0.0.11 valid=10s ipv6=off;\n\
    resolver_timeout 5s;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    \n\
    location = /overview {\n\
        return 301 /platform;\n\
    }\n\
    \n\
    location = /privacy-policy {\n\
        return 301 /privacy;\n\
    }\n\
    \n\
    location /api/ {\n\
        set $orbital_backend web:8000;\n\
        proxy_pass http://$orbital_backend$request_uri;\n\
        proxy_set_header Host $host;\n\
        proxy_set_header X-Real-IP $remote_addr;\n\
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\
        proxy_set_header X-Forwarded-Proto $scheme;\n\
    }\n\
    \n\
    location / {\n\
    try_files $uri.html $uri $uri/ /404.html;\n\
    }\n\
    \n\
    gzip on;\n\
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;\n\
    }\n' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
