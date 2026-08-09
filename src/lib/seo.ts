export const SITE_NAME = "ETHOS";
export const DEFAULT_OG_IMAGE = "/logo/Transparente-200.png";

export function getSiteUrl() {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;
  if (typeof window !== "undefined") return window.location.origin;
  return "https://ethosprogram.com";
}

export function getAbsoluteUrl(path = "") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}
