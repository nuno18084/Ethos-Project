import type { Language } from "../i18n/translations";

const PT_PREFIX = "/pt";

export function getLanguageFromPathname(pathname: string): Language | null {
  if (pathname === PT_PREFIX || pathname.startsWith(`${PT_PREFIX}/`)) {
    return "pt";
  }
  return null;
}

export function isHomePath(pathname: string): boolean {
  return pathname === "/" || pathname === PT_PREFIX;
}

export function stripLanguagePrefix(pathname: string): string {
  if (pathname === PT_PREFIX) return "/";
  if (pathname.startsWith(`${PT_PREFIX}/`)) return pathname.slice(PT_PREFIX.length);
  return pathname;
}

export function localizePathname(pathname: string, language: Language): string {
  const base = stripLanguagePrefix(pathname);
  if (language !== "pt") return base;
  return base === "/" ? PT_PREFIX : `${PT_PREFIX}${base}`;
}

export function localizeHref(href: string, language: Language): string {
  const url = new URL(href, "https://www.ethosprogram.com");
  return `${localizePathname(url.pathname, language)}${url.search}${url.hash}`;
}

export function homePath(language: Language): string {
  return localizePathname("/", language);
}

export function locationWithLanguage(
  location: { pathname: string; search: string; hash: string },
  language: Language,
): string {
  return `${localizePathname(location.pathname, language)}${location.search}${location.hash}`;
}
