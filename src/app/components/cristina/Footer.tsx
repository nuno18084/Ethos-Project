import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../../i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  const links = [
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.reviews, href: "/#reviews" },
    { name: t.nav.partners, href: "/#partners" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  const linkClass = "hover:text-amber-600 transition-colors";

  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-serif text-stone-100 tracking-widest uppercase">
              Ethos
            </h3>
            <p className="meta-text text-stone-500 mt-2">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
            <a
              href="https://www.linkedin.com/in/nuno-cola%C3%A7o-836163174/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] normal-case tracking-normal text-stone-500 hover:text-amber-600 transition-colors mt-1 inline-block"
            >
              {t.footer.credit}
            </a>
          </div>

          <nav
            aria-label="Footer navigation"
            className="meta-text text-stone-600 flex flex-wrap justify-center gap-x-4 gap-y-2"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.name}
              </a>
            ))}
          </nav>

          <div className="meta-text text-stone-600 flex justify-center md:justify-end gap-x-4">
            <Link to="/privacy" className={linkClass}>
              {t.footer.privacy}
            </Link>
            <Link to="/terms" className={linkClass}>
              {t.footer.terms}
            </Link>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://www.instagram.com/cristinavc_ethos/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-amber-600 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/cristinavidaldecarvalho/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-amber-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
