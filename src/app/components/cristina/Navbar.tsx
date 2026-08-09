import { lazy, Suspense, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../../../i18n/LanguageContext";
import { LanguageSelector } from "../../../i18n/LanguageSelector";

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

    const sectionIds = ["about", "services", "reviews", "partners", "contact"];

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
    { name: t.nav.partners, href: "/#partners", id: "partners" },
    { name: t.nav.contact, href: "/#contact", id: "contact" },
  ];

  const showSolidNav = !isHome || scrolled || isOpen;
  const currentSection = isHome ? activeSection : null;

  const getDesktopLinkClass = (linkId: string) => {
    if (currentSection === linkId) {
      return "text-xs uppercase tracking-widest text-amber-600 transition-colors";
    }

    return isHome
      ? "text-xs uppercase tracking-widest text-stone-900 hover:text-stone-600 transition-colors"
      : "text-xs uppercase tracking-widest text-stone-900 hover:text-amber-600 transition-colors";
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
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-0">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="inline-block shrink-0 leading-none -my-0.5 md:-my-1"
          >
            <picture className="inline-block">
              <source srcSet="/logo/Branco-200.webp" type="image/webp" />
              <img
                src="/logo/Branco-200.png"
                alt="ETHOS"
                width={200}
                height={200}
                className="h-14 sm:h-16 md:h-20 w-auto brightness-0"
              />
            </picture>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={getDesktopLinkClass(link.id)}
                aria-current={currentSection === link.id ? "true" : undefined}
              >
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
