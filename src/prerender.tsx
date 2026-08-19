import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./app/routes";
import { getCanonicalUrl, routeMeta } from "./app/lib/meta";

const distDir = path.resolve(process.cwd(), "dist");
const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function injectHead(html: string, title: string, description: string, canonicalUrl: string) {
  return html
    .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(description)}" />`,
    )
    .replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeHtml(title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeHtml(description)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    );
}

function outputPathForRoute(routePath: string) {
  if (routePath === "/") return templatePath;
  return path.join(distDir, `${routePath.replace(/^\//, "")}.html`);
}

function alternateOutputPathForRoute(routePath: string) {
  if (routePath === "/") return null;
  return path.join(distDir, routePath.replace(/^\//, ""), "index.html");
}

function writePrerenderedPage({
  routePath,
  outputPath,
  title,
  description,
  canonicalUrl,
}: {
  routePath: string;
  outputPath: string;
  title: string;
  description: string;
  canonicalUrl: string;
}) {
  const body = renderToString(
    <StaticRouter location={routePath}>
      <AppRoutes />
    </StaticRouter>,
  );
  const pageHtml = injectHead(template, title, description, canonicalUrl).replace(
    '<div id="root"></div>',
    `<div id="root">${body}</div>`,
  );

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pageHtml);
}

for (const meta of routeMeta) {
  const page = {
    routePath: meta.path,
    outputPath: outputPathForRoute(meta.path),
    title: meta.title,
    description: meta.description,
    canonicalUrl: getCanonicalUrl(meta.path),
  };
  writePrerenderedPage({
    ...page,
  });

  const alternateOutputPath = alternateOutputPathForRoute(meta.path);
  if (alternateOutputPath) {
    writePrerenderedPage({
      ...page,
      outputPath: alternateOutputPath,
    });
  }
}

writePrerenderedPage({
  routePath: "/404",
  outputPath: path.join(distDir, "404.html"),
  title: "Page Not Found | Orbital Aquatics",
  description: "The requested Orbital Aquatics page could not be found.",
  canonicalUrl: getCanonicalUrl("/404"),
});
