const defaultTitle = "Orbital Aquatics | Pool Operations Software";
const defaultDescription =
  "Orbital Aquatics gives pool management companies and community pools one connected platform for operations, administration, and member experience.";

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function setPageMeta(title = defaultTitle, description = defaultDescription) {
  document.title = title;
  setMetaContent('meta[name="description"]', description);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', description);
  setMetaContent('meta[name="twitter:title"]', title);
  setMetaContent('meta[name="twitter:description"]', description);
}
