import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-serif text-stone-100 tracking-widest uppercase">
            Ethos
          </h3>
          <p className="text-xs text-stone-500 mt-2">
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
          <a href="#" className="hover:text-amber-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            <Twitter size={20} />
          </a>
        </div>

        <div className="text-xs text-stone-600 flex space-x-4 uppercase tracking-widest">
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
