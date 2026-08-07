import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { slide as BurgerMenu } from "react-burger-menu";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";
import { LanguageSelector } from "../../../i18n/LanguageSelector";
import "../../../styles/burger-menu.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;

    e.preventDefault();
    if (location.hash) {
      navigate("/", { replace: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const { style: bodyStyle } = document.body;
    const { style: htmlStyle } = document.documentElement;

    bodyStyle.position = "fixed";
    bodyStyle.top = `-${scrollY}px`;
    bodyStyle.left = "0";
    bodyStyle.right = "0";
    bodyStyle.width = "100%";
    bodyStyle.overflow = "hidden";
    htmlStyle.overflow = "hidden";

    return () => {
      bodyStyle.position = "";
      bodyStyle.top = "";
      bodyStyle.left = "";
      bodyStyle.right = "";
      bodyStyle.width = "";
      bodyStyle.overflow = "";
      htmlStyle.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [isOpen]);

  const links = [
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.reviews, href: "/#reviews" },
    { name: t.nav.partners, href: "/#partners" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  const showSolidNav = !isHome || scrolled || isOpen;

  const linkClass = isHome
    ? "text-xs uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors"
    : "text-xs uppercase tracking-widest text-stone-900 hover:text-amber-600 transition-colors";

  const menuButtonClass = showSolidNav
    ? "text-stone-900 focus:outline-none transition-colors"
    : "text-amber-600 hover:text-amber-500 focus:outline-none transition-colors";

  return (
    <>
      <BurgerMenu
        right
        isOpen={isOpen}
        onStateChange={(state) => setIsOpen(state.isOpen)}
        customBurgerIcon={false}
        customCrossIcon={<X size={28} strokeWidth={1.5} className="text-stone-800" />}
        width="100%"
        menuClassName="ethos-bm-menu"
        burgerButtonClassName="ethos-bm-burger-hidden"
        crossButtonClassName="ethos-bm-cross-button"
        overlayClassName="ethos-bm-overlay"
        disableAutoFocus
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="ethos-bm-item"
          >
            {link.name}
          </a>
        ))}
      </BurgerMenu>

      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          isOpen ? "z-[1300]" : "z-50"
        } ${
          showSolidNav
            ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-0">
          <Link
            to="/"
            onClick={handleLogoClick}
            className={`text-2xl sm:text-3xl font-serif tracking-widest text-stone-900 transition-colors${
              isHome ? "" : " hover:text-amber-600"
            }`}
          >
            ETHOS
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.name}
              </a>
            ))}
            <LanguageSelector />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button
              type="button"
              className={menuButtonClass}
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
