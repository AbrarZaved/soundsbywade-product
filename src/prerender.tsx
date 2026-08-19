import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./app/routes";
import { getCanonicalUrl, routeMeta } from "./app/lib/meta";

const distDir = path.resolve(process.cwd(), "dist");
const ssrDir = path.resolve(process.cwd(), "dist-ssr");
const templatePath = path.join(distDir, "index.html");
const template = fs.readFileSync(templatePath, "utf8");

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function replaceRequired(html: string, pattern: RegExp, replacement: string, label: string) {
  const matches = html.match(pattern);
  if (!matches?.length) {
    throw new Error(`Prerender template is missing required SEO tag: ${label}`);
  }
  if (matches.length > 1) {
    throw new Error(`Prerender template contains duplicate SEO tags for: ${label}`);
  }
  return html.replace(pattern, replacement);
}

function assertSingle(html: string, pattern: RegExp, label: string) {
  const matches = html.match(pattern);
  if (matches?.length !== 1) {
    throw new Error(`Expected exactly one ${label}; found ${matches?.length ?? 0}`);
  }
}

function assertInjectedHead(html: string) {
  assertSingle(html, /<title>[\s\S]*?<\/title>/g, "title tag");
  assertSingle(html, /<meta\s+name="description"\s+content="[^"]*"\s*\/>/g, "meta description tag");
  assertSingle(html, /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/g, "canonical link tag");
  assertSingle(html, /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/g, "Open Graph URL tag");
  assertSingle(html, /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/g, "Open Graph title tag");
  assertSingle(html, /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/g, "Open Graph description tag");
  assertSingle(html, /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/g, "Twitter title tag");
  assertSingle(html, /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/g, "Twitter description tag");
}

function injectHead(html: string, title: string, description: string, canonicalUrl: string) {
  const injected = [
    [/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`, "title"],
    [
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(description)}" />`,
      "description",
    ],
    [/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonicalUrl}" />`, "canonical"],
    [/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonicalUrl}" />`, "og:url"],
    [
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeHtml(title)}" />`,
      "og:title",
    ],
    [
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeHtml(description)}" />`,
      "og:description",
    ],
    [
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
      "twitter:title",
    ],
    [
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
      "twitter:description",
    ],
  ].reduce((currentHtml, [pattern, replacement, label]) => {
    return replaceRequired(currentHtml, pattern as RegExp, replacement as string, label as string);
  }, html);

  assertInjectedHead(injected);
  return injected;
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

fs.rmSync(ssrDir, { recursive: true, force: true });
