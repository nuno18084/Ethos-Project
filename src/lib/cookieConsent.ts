export const COOKIE_CONSENT_KEY = "ethos-cookie-consent";
export const COOKIE_CONSENT_VERSION = 1;

export type CookiePreferences = {
  essential: true;
  analytics: boolean;
  marketing: boolean;
};

export type StoredCookieConsent = {
  version: number;
  preferences: CookiePreferences;
  decidedAt: string;
};

const defaultPreferences = (): CookiePreferences => ({
  essential: true,
  analytics: false,
  marketing: false,
});

export function getStoredConsent(): StoredCookieConsent | null {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredCookieConsent;
    if (
      parsed.version !== COOKIE_CONSENT_VERSION ||
      !parsed.preferences ||
      parsed.preferences.essential !== true
    ) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export function hasConsentDecision(): boolean {
  return getStoredConsent() !== null;
}

export function saveConsent(preferences: CookiePreferences): StoredCookieConsent {
  const record: StoredCookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    preferences,
    decidedAt: new Date().toISOString(),
  };

  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(record));
  return record;
}

export function acceptAllCookies(): StoredCookieConsent {
  return saveConsent({
    essential: true,
    analytics: true,
    marketing: true,
  });
}

export function rejectOptionalCookies(): StoredCookieConsent {
  return saveConsent(defaultPreferences());
}

export function acceptsAnalytics(): boolean {
  return getStoredConsent()?.preferences.analytics ?? false;
}

export function acceptsMarketing(): boolean {
  return getStoredConsent()?.preferences.marketing ?? false;
}
