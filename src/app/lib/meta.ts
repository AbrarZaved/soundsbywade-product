const defaultTitle = "Orbital Aquatics | Pool Management Software";
const defaultDescription =
  "Orbital Aquatics is pool management software that connects operations, administration, and member experience for pool management companies and community pools.";
export const siteUrl = "https://orbitalaquatics.com";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
};

export const routeMeta: RouteMeta[] = [
  {
    path: "/",
    title: defaultTitle,
    description: defaultDescription,
  },
  {
    path: "/platform",
    title: "Pool Operations Software Platform | Orbital Aquatics",
    description:
      "See how Orbital Aquatics helps pool teams connect readiness, staffing, chemistry, maintenance, administration, and member updates in one operations platform.",
  },
  {
    path: "/management-companies",
    title: "Pool Management Company Software | Orbital Aquatics",
    description:
      "Pool management company software for viewing readiness, staff workflows, chemistry, maintenance, incidents, and follow-up across every property.",
  },
  {
    path: "/pool-boards",
    title: "Pool Board Management Software | Orbital Aquatics",
    description:
      "Orbital Aquatics gives community pool boards a calmer way to manage memberships, payments, events, communication, administration, and member experience.",
  },
  {
    path: "/pool-websites",
    title: "Pool Website Software | Orbital Aquatics",
    description:
      "Pool website software that gives members a clean mobile-first place for hours, announcements, events, registrations, documents, and membership information.",
  },
  {
    path: "/about",
    title: "About Orbital Aquatics",
    description:
      "Meet the Orbital Aquatics founders and learn why they are building simpler software for the people who run pools.",
  },
  {
    path: "/contact",
    title: "Book a Demo | Orbital Aquatics",
    description: "Request a demo of Orbital Aquatics for your pool management company or community pool board.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | Orbital Aquatics",
    description: "Learn how Orbital Aquatics handles information when you use our website and services.",
  },
  {
    path: "/terms",
    title: "Terms of Service | Orbital Aquatics",
    description: "Review the terms that govern access to the Orbital Aquatics website and applicable services.",
  },
];

const canonicalPathRedirects: Record<string, string> = {
  "/overview": "/platform",
  "/privacy-policy": "/privacy",
};

export function normalizeCanonicalPath(pathname: string) {
  const withoutTrailingSlash = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return canonicalPathRedirects[withoutTrailingSlash] ?? withoutTrailingSlash;
}

export function getRouteMeta(pathname: string) {
  const normalizedPath = normalizeCanonicalPath(pathname);
  return routeMeta.find((meta) => meta.path === normalizedPath) ?? routeMeta[0];
}

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function setCanonicalUrl(url: string) {
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }

  canonical.href = url;
}

export function getCanonicalUrl(pathname: string) {
  const normalizedPath = normalizeCanonicalPath(pathname);
  return `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath.replace(/\/$/, "")}`;
}

export function setPageMeta(title = defaultTitle, description = defaultDescription) {
  const canonicalUrl = getCanonicalUrl(window.location.pathname);

  document.title = title;
  setCanonicalUrl(canonicalUrl);
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:url"]', canonicalUrl);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[name="twitter:description"]', description);
}
