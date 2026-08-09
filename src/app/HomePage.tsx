import { Toaster } from "sonner";
import { PageSeo } from "../components/PageSeo";
import { useLanguage } from "../i18n/LanguageContext";
import { getAbsoluteUrl } from "../lib/seo";
import { Navbar } from "./components/cristina/Navbar";
import { Hero } from "./components/cristina/Hero";
import { About } from "./components/cristina/About";
import { Services } from "./components/cristina/Services";
import { Reviews } from "./components/cristina/Reviews";
import { Partners } from "./components/cristina/Partners";
import { Contact } from "./components/cristina/Contact";
import { Footer } from "./components/cristina/Footer";

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
        <About />
        <Services />
        <Reviews />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
