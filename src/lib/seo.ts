export const SITE_NAME = "ETHOS";
export const DEFAULT_OG_IMAGE = "/images/og-share.png";
export const DEFAULT_OG_IMAGE_WIDTH = "1200";
export const DEFAULT_OG_IMAGE_HEIGHT = "630";

export function getSiteUrl() {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  if (typeof window !== "undefined") return window.location.origin;
  return "https://ethos-program.web.app";
}

export function getAbsoluteUrl(path = "") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
