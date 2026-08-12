# Orbital Aquatics Public Website

Public marketing website for Orbital Aquatics.

## Local Development

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Optional local API configuration for the demo request form:

```dotenv
VITE_API_BASE_URL=http://127.0.0.1:8000
```

If `VITE_API_BASE_URL` is omitted, the demo request form posts to the same-origin `/api/v1/public/demo-requests/` path.
