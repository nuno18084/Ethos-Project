import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getLanguageFromPathname,
  localizeHref,
  locationWithLanguage,
} from "../lib/languagePath";
import { translations, type Language, type TranslationKeys } from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLanguage(): Language {
  const fromUrl = getLanguageFromPathname(window.location.pathname);
  if (fromUrl) return fromUrl;

  const stored = localStorage.getItem("ethos-language");
  if (stored === "en" || stored === "pt") return stored;
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const pendingStorageUpgrade = useRef(
    getLanguageFromPathname(window.location.pathname) == null &&
      localStorage.getItem("ethos-language") === "pt",
  );

  const setLanguage = (lang: Language) => {
    localStorage.setItem("ethos-language", lang);
    document.documentElement.lang = lang;

    const next = locationWithLanguage(location, lang);
    const current = `${location.pathname}${location.search}${location.hash}`;
    if (next !== current) {
      navigate(next, { replace: true });
      return;
    }

    setLanguageState(lang);
  };

  useLayoutEffect(() => {
    const fromUrl = getLanguageFromPathname(location.pathname);

    if (fromUrl === "pt") {
      pendingStorageUpgrade.current = false;
      setLanguageState("pt");
      localStorage.setItem("ethos-language", "pt");
      document.documentElement.lang = "pt";
      return;
    }

    if (pendingStorageUpgrade.current) {
      pendingStorageUpgrade.current = false;
      navigate(locationWithLanguage(location, "pt"), { replace: true });
      return;
    }

    setLanguageState("en");
    localStorage.setItem("ethos-language", "en");
    document.documentElement.lang = "en";
  }, [location, navigate]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function useLocalizedHref() {
  const { language } = useLanguage();
  return useCallback((href: string) => localizeHref(href, language), [language]);
}
