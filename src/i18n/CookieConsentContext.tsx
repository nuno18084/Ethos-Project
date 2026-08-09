import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  acceptAllCookies,
  getStoredConsent,
  hasConsentDecision,
  rejectOptionalCookies,
  type StoredCookieConsent,
} from "../lib/cookieConsent";

type CookieConsentContextType = {
  consent: StoredCookieConsent | null;
  isBannerOpen: boolean;
  acceptAll: () => void;
  rejectOptional: () => void;
  openBanner: () => void;
  closeBanner: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextType | null>(
  null,
);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<StoredCookieConsent | null>(() =>
    getStoredConsent(),
  );
  const [isBannerOpen, setIsBannerOpen] = useState(
    () => !hasConsentDecision(),
  );

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== "ethos-cookie-consent") return;
      setConsent(getStoredConsent());
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const acceptAll = useCallback(() => {
    const record = acceptAllCookies();
    setConsent(record);
    setIsBannerOpen(false);
  }, []);

  const rejectOptional = useCallback(() => {
    const record = rejectOptionalCookies();
    setConsent(record);
    setIsBannerOpen(false);
  }, []);

  const openBanner = useCallback(() => {
    setIsBannerOpen(true);
  }, []);

  const closeBanner = useCallback(() => {
    if (hasConsentDecision()) {
      setIsBannerOpen(false);
    }
  }, []);

  const value = useMemo(
    () => ({
      consent,
      isBannerOpen,
      acceptAll,
      rejectOptional,
      openBanner,
      closeBanner,
    }),
    [
      consent,
      isBannerOpen,
      acceptAll,
      rejectOptional,
      openBanner,
      closeBanner,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error(
      "useCookieConsent must be used within a CookieConsentProvider",
    );
  }
  return context;
}
