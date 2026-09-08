import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'
import { CookieConsentProvider } from './i18n/CookieConsentContext.tsx'
import { getCanonicalRedirectUrl } from './lib/seo'

const canonicalRedirect = getCanonicalRedirectUrl(window.location)

if (canonicalRedirect) {
  window.location.replace(canonicalRedirect)
} else {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider>
        <CookieConsentProvider>
          <App />
        </CookieConsentProvider>
      </LanguageProvider>
    </StrictMode>,
  )
}
