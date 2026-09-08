export const SITE_NAME = "ETHOS";
export const CANONICAL_ORIGIN = "https://www.ethosprogram.com";
export const DEFAULT_OG_IMAGE = "/images/og-share.png";
export const DEFAULT_OG_IMAGE_WIDTH = "1200";
export const DEFAULT_OG_IMAGE_HEIGHT = "630";

const ALTERNATE_HOSTS = new Set([
  "ethosprogram.com",
  "ethos-program.web.app",
  "ethos-program.firebaseapp.com",
]);

export function getSiteUrl() {
  return CANONICAL_ORIGIN;
}

export function getAbsoluteUrl(path = "") {
  return `${getSiteUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export function getCanonicalRedirectUrl(
  location: Pick<Location, "hostname" | "pathname" | "search" | "hash">,
) {
  if (!ALTERNATE_HOSTS.has(location.hostname)) return null;

  return `${CANONICAL_ORIGIN}${location.pathname}${location.search}${location.hash}`;
}
