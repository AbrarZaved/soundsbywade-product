const defaultTitle = "Orbital Aquatics | Pool Operations Software";
const defaultDescription =
  "Orbital Aquatics gives pool management companies and community pools one connected platform for operations, administration, and member experience.";
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
    title: "Platform | Orbital Aquatics",
    description:
      "See how Orbital Aquatics connects pool operations, administration, and member experience in one shared system.",
  },
  {
    path: "/management-companies",
    title: "Management Companies | Orbital Aquatics",
    description:
      "Orbital Aquatics helps pool management companies see readiness, staff workflows, chemistry, maintenance, incidents, and follow-up across every property.",
  },
  {
    path: "/pool-boards",
    title: "Pool Boards | Orbital Aquatics",
    description:
      "Orbital Aquatics gives community pool boards a calmer place for memberships, payments, events, communication, administration, and member experience.",
  },
  {
    path: "/pool-websites",
    title: "Pool Websites | Orbital Aquatics",
    description:
      "Orbital Aquatics helps pools give members a clean, mobile-first place for hours, announcements, events, registrations, and membership information.",
  },
  {
    path: "/about",
    title: "About | Orbital Aquatics",
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

export function getRouteMeta(pathname: string) {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
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
  const normalizedPath = pathname === "/privacy-policy" ? "/privacy" : pathname;
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
