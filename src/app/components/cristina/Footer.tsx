import { Instagram, Linkedin } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-serif text-stone-100 tracking-widest uppercase">
            Ethos
          </h3>
          <p className="meta-text text-stone-500 mt-2">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/cristinavc_ethos/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-amber-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristinavidaldecarvalho/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-amber-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        <div className="meta-text text-stone-600 flex space-x-4">
          <a href="#" className="hover:text-amber-400 transition-colors">
            {t.footer.privacy}
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            {t.footer.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
