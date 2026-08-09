import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { useCookieConsent } from "../i18n/CookieConsentContext";

export function CookieBanner() {
  const { t } = useLanguage();
  const { isBannerOpen, acceptAll, rejectOptional, closeBanner, consent } =
    useCookieConsent();

  if (!isBannerOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[1400] p-4 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-description"
    >
      <div className="max-w-4xl mx-auto bg-white border border-stone-200 shadow-xl rounded-sm p-6 md:p-8">
        <h2
          id="cookie-banner-title"
          className="text-lg md:text-xl font-serif text-stone-900 mb-3"
        >
          {t.cookies.title}
        </h2>

        <p
          id="cookie-banner-description"
          className="text-sm text-stone-600 leading-relaxed mb-4"
        >
          {t.cookies.description}{" "}
          <Link
            to="/privacy"
            className="text-amber-600 hover:text-amber-700 underline underline-offset-2"
            onClick={closeBanner}
          >
            {t.cookies.privacyLink}
          </Link>
          .
        </p>

        <ul className="text-xs text-stone-500 space-y-1 mb-6">
          <li>
            <span className="font-medium text-stone-700">
              {t.cookies.essentialLabel}:
            </span>{" "}
            {t.cookies.essentialDescription}
          </li>
          <li>
            <span className="font-medium text-stone-700">
              {t.cookies.optionalLabel}:
            </span>{" "}
            {t.cookies.optionalDescription}
          </li>
        </ul>

        {consent ? (
          <p className="text-xs text-stone-500 mb-4">{t.cookies.currentChoice}</p>
        ) : null}

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <button
            type="button"
            onClick={acceptAll}
            className="btn-label px-6 py-3 bg-amber-600 text-white hover:bg-amber-700 transition-colors"
          >
            {t.cookies.acceptAll}
          </button>
          <button
            type="button"
            onClick={rejectOptional}
            className="btn-label px-6 py-3 border border-stone-300 text-stone-700 hover:border-amber-600 hover:text-amber-600 transition-colors"
          >
            {t.cookies.rejectOptional}
          </button>
        </div>
      </div>
    </div>
  );
}
