import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookieBanner } from "../components/CookieBanner";
import { HomePage } from "./HomePage";
import { ScrollToTop } from "./ScrollToTop";

const PrivacyPage = lazy(() =>
  import("./pages/PrivacyPage").then((module) => ({
    default: module.PrivacyPage,
  })),
);
const TermsPage = lazy(() =>
  import("./pages/TermsPage").then((module) => ({
    default: module.TermsPage,
  })),
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CookieBanner />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
