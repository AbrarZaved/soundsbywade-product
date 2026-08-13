const defaultTitle = "Orbital Aquatics | Pool Operations Software";
const defaultDescription =
  "Orbital Aquatics gives pool management companies and community pools one connected platform for operations, administration, and member experience.";
const siteUrl = "https://orbitalaquatics.com";

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

function getCanonicalUrl(pathname: string) {
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
