import { lazy, Suspense } from "react";
import { Toaster } from "sonner";
import { PageSeo } from "../components/PageSeo";
import { useLanguage } from "../i18n/LanguageContext";
import { getAbsoluteUrl } from "../lib/seo";
import { Navbar } from "./components/cristina/Navbar";
import { Hero } from "./components/cristina/Hero";
import { Footer } from "./components/cristina/Footer";

const About = lazy(() =>
  import("./components/cristina/About").then((module) => ({
    default: module.About,
  })),
);
const Services = lazy(() =>
  import("./components/cristina/Services").then((module) => ({
    default: module.Services,
  })),
);
const Reviews = lazy(() =>
  import("./components/cristina/Reviews").then((module) => ({
    default: module.Reviews,
  })),
);
const Partners = lazy(() =>
  import("./components/cristina/Partners").then((module) => ({
    default: module.Partners,
  })),
);
const Contact = lazy(() =>
  import("./components/cristina/Contact").then((module) => ({
    default: module.Contact,
  })),
);

export function HomePage() {
  const { language, t } = useLanguage();

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans overflow-x-hidden">
      <PageSeo
        title={t.seo.home.title}
        description={t.seo.home.description}
        path="/"
        language={language}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ETHOS",
          url: getAbsoluteUrl("/"),
          logo: getAbsoluteUrl("/logo/Transparente.png"),
          description: t.seo.home.description,
          email: "cristina.carvalho@ethosprogram.com",
          areaServed: "PT",
          sameAs: ["https://www.instagram.com/cristinavc_ethos/"],
        }}
      />
      <Toaster position="top-center" richColors />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Services />
          <Reviews />
          <Partners />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
