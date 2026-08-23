import { lazy, Suspense, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";
import { LanguageSelector } from "../../../i18n/LanguageSelector";
import { SHOW_PARTNERS } from "../../../lib/featureFlags";

const MobileBurgerMenu = lazy(() =>
  import("./MobileBurgerMenu").then((module) => ({
    default: module.MobileBurgerMenu,
  })),
);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);

    if (!isHome) return;

    e.preventDefault();
    if (location.hash) {
      navigate("/", { replace: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["about", "services", "reviews", "contact"].concat(
      SHOW_PARTNERS ? (["partners"] as const) : [],
    );

    const updateActiveSection = () => {
      const offset = 120;
      const scrollPos = window.scrollY + offset;

      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      updateActiveSection();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    const preloadMenu = () => {
      void import("./MobileBurgerMenu");
    };

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(preloadMenu);
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = setTimeout(preloadMenu, 1500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const htmlStyle = document.documentElement.style;
    const bodyStyle = document.body.style;

    htmlStyle.overflow = "hidden";
    bodyStyle.overflow = "hidden";
    bodyStyle.touchAction = "none";

    return () => {
      htmlStyle.overflow = "";
      bodyStyle.overflow = "";
      bodyStyle.touchAction = "";
    };
  }, [isOpen]);

  const links = [
    { name: t.nav.about, href: "/#about", id: "about" },
    { name: t.nav.services, href: "/#services", id: "services" },
    { name: t.nav.reviews, href: "/#reviews", id: "reviews" },
    ...(SHOW_PARTNERS
      ? [{ name: t.nav.partners, href: "/#partners", id: "partners" as const }]
      : []),
    { name: t.nav.contact, href: "/#contact", id: "contact" },
  ];

  const showSolidNav = !isHome || scrolled || isOpen;
  const currentSection = isHome ? activeSection : null;

  const navLinks = links.filter((link) => link.id !== "contact");
  const contactLink = links.find((link) => link.id === "contact");

  const getDesktopLinkClass = (linkId: string) => {
    const base =
      "nav-link text-xs uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-amber-600";

    if (currentSection === linkId) {
      return `${base} nav-link--active text-amber-600`;
    }

    return `${base} text-stone-900`;
  };

  const getContactLinkClass = () => {
    const base =
      "nav-contact text-xs uppercase tracking-widest font-medium px-3 py-1 border";

    if (showSolidNav) {
      return `${base} border-amber-600 bg-amber-600 text-white hover:bg-amber-500 hover:border-amber-500`;
    }

    if (currentSection === "contact") {
      return `${base} nav-contact--ghost nav-contact--active border-transparent bg-transparent text-amber-600`;
    }

    return `${base} nav-contact--ghost border-transparent bg-transparent text-stone-900 hover:text-amber-600`;
  };

  const menuButtonClass = showSolidNav
    ? "text-stone-900 focus:outline-none transition-colors"
    : "text-amber-600 hover:text-amber-500 focus:outline-none transition-colors";

  return (
    <>
      <Suspense fallback={null}>
        <MobileBurgerMenu
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          links={links}
          currentSection={currentSection}
        />
      </Suspense>

      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          isOpen ? "z-[1300]" : "z-50"
        } ${
          showSolidNav
            ? "bg-white/90 backdrop-blur-md shadow-sm py-1.5 md:py-2"
            : "bg-transparent py-2 md:py-2.5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="inline-block shrink-0 leading-none -my-0.5 md:-my-1"
            aria-label="ETHOS"
          >
            <span
              className={`navbar-logo inline-block h-14 sm:h-16 md:h-20 aspect-square transition-colors duration-700 ease-in-out ${
                showSolidNav ? "bg-amber-600" : "bg-black"
              }`}
              role="img"
              aria-hidden="true"
            />
          </Link>

          <div className="hidden md:flex items-baseline gap-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={getDesktopLinkClass(link.id)}
                aria-current={currentSection === link.id ? "true" : undefined}
              >
                {link.name}
              </a>
            ))}
            {contactLink && (
              <a
                href={contactLink.href}
                className={getContactLinkClass()}
                aria-current={currentSection === "contact" ? "true" : undefined}
              >
                {contactLink.name}
              </a>
            )}
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
