import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  sections: readonly LegalSection[];
  backLabel: string;
};

export function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  backLabel,
}: LegalPageLayoutProps) {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans">
      <Navbar />
      <main className="pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 section-body hover:text-amber-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {backLabel}
          </Link>

          <h1 className="section-title mb-3">{title}</h1>
          <p className="meta-text text-stone-500 mb-12">{lastUpdated}</p>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="card-title mb-3">{section.title}</h2>
                <p className="section-body whitespace-pre-line">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
