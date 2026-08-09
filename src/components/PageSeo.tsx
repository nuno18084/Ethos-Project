import { useEffect } from "react";
import type { Language } from "../i18n/translations";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  getAbsoluteUrl,
} from "../lib/seo";

export type PageSeoConfig = {
  title: string;
  description: string;
  path?: string;
  language: Language;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown>;
};

function upsertMeta(
  key: string,
  content: string,
  attribute: "name" | "property" = "name",
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

export function PageSeo({
  title,
  description,
  path = "",
  language,
  noIndex = false,
  jsonLd,
}: PageSeoConfig) {
  useEffect(() => {
    const pageUrl = getAbsoluteUrl(path);
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
    const ogImage = getAbsoluteUrl(DEFAULT_OG_IMAGE);
    const locale = language === "pt" ? "pt_PT" : "en_US";
    const alternateLocale = language === "pt" ? "en_US" : "pt_PT";

    document.title = "Ethos";
    document.documentElement.lang = language;

    upsertMeta("description", description);
    upsertMeta("robots", noIndex ? "noindex, nofollow" : "index, follow");
    upsertMeta("author", "ETHOS");
    upsertMeta("theme-color", "#d97706");
    upsertLink("canonical", pageUrl);

    upsertMeta("og:title", fullTitle, "property");
    upsertMeta("og:description", description, "property");
    upsertMeta("og:type", "website", "property");
    upsertMeta("og:url", pageUrl, "property");
    upsertMeta("og:site_name", SITE_NAME, "property");
    upsertMeta("og:image", ogImage, "property");
    upsertMeta("og:locale", locale, "property");
    upsertMeta("og:locale:alternate", alternateLocale, "property");

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", fullTitle);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", ogImage);

    const scriptId = "page-json-ld";
    const existingScript = document.getElementById(scriptId);

    if (jsonLd) {
      const script =
        existingScript ??
        Object.assign(document.createElement("script"), {
          id: scriptId,
          type: "application/ld+json",
        });

      if (!existingScript) {
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(jsonLd);
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, path, language, noIndex, jsonLd]);

  return null;
}
