import { lazy, Suspense, useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutMenuRef = useRef<HTMLDivElement>(null);
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

    const sectionIds = ["about", "founder", "services", "reviews", "contact"].concat(
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

  useEffect(() => {
    if (!aboutOpen) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (
        aboutMenuRef.current &&
        !aboutMenuRef.current.contains(event.target as Node)
      ) {
        setAboutOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setAboutOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [aboutOpen]);

  const aboutLinks = [
    { name: t.nav.aboutEthos, href: "/#about", id: "about" },
    { name: t.nav.aboutFounder, href: "/#founder", id: "founder" },
  ];

  const links = [
    ...aboutLinks,
    { name: t.nav.services, href: "/#services", id: "services" },
    { name: t.nav.reviews, href: "/#reviews", id: "reviews" },
    ...(SHOW_PARTNERS
      ? [{ name: t.nav.partners, href: "/#partners", id: "partners" as const }]
      : []),
    { name: t.nav.contact, href: "/#contact", id: "contact" },
  ];

  const showSolidNav = !isHome || scrolled || isOpen;
  const currentSection = isHome ? activeSection : null;

  const desktopLinks = links.filter(
    (link) => link.id !== "contact" && link.id !== "about" && link.id !== "founder",
  );
  const contactLink = links.find((link) => link.id === "contact");
  const isAboutActive =
    currentSection === "about" || currentSection === "founder";

  const getDesktopLinkClass = (isActive: boolean) => {
    const base =
      "nav-link text-xs uppercase tracking-widest transition-colors duration-300 ease-in-out hover:text-ethos";

    if (isActive) {
      return `${base} nav-link--active text-ethos`;
    }

    return `${base} text-stone-900`;
  };

  const getContactLinkClass = () => {
    const base =
      "nav-contact text-xs uppercase tracking-widest font-medium px-3 py-1 border";

    if (showSolidNav) {
      return `${base} border-ethos bg-ethos text-white hover:bg-ethos-hover hover:border-ethos-hover`;
    }

    if (currentSection === "contact") {
      return `${base} nav-contact--ghost nav-contact--active border-transparent bg-transparent text-ethos`;
    }

    return `${base} nav-contact--ghost border-transparent bg-transparent text-stone-900 hover:text-ethos`;
  };

  const menuButtonClass = showSolidNav
    ? "text-stone-900 focus:outline-none transition-colors"
    : "text-ethos hover:text-ethos-hover focus:outline-none transition-colors";

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
                showSolidNav ? "bg-ethos" : "bg-black"
              }`}
              role="img"
              aria-hidden="true"
            />
          </Link>

          <div className="hidden md:flex items-center gap-x-8">
            <div
              ref={aboutMenuRef}
              className="relative flex items-center gap-1"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <a
                href="/#about"
                className={getDesktopLinkClass(isAboutActive || aboutOpen)}
                aria-haspopup="true"
                aria-expanded={aboutOpen}
                aria-current={isAboutActive ? "true" : undefined}
                onClick={() => setAboutOpen(false)}
              >
                {t.nav.about}
              </a>
              <ChevronDown
                size={12}
                strokeWidth={1.75}
                className={`shrink-0 transition-transform duration-200 ${
                  isAboutActive || aboutOpen ? "text-ethos" : "text-stone-900"
                } ${aboutOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
              <div
                className={`absolute left-0 top-full z-50 min-w-[15.5rem] pt-3 transition-all duration-200 ${
                  aboutOpen
                    ? "visible opacity-100 translate-y-0"
                    : "invisible opacity-0 -translate-y-1 pointer-events-none"
                }`}
              >
                <div className="bg-white/95 backdrop-blur-md border border-stone-200/80 py-2">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setAboutOpen(false)}
                      className={`block px-4 py-2.5 text-xs uppercase tracking-widest transition-colors ${
                        currentSection === link.id
                          ? "text-ethos"
                          : "text-stone-900 hover:text-ethos"
                      }`}
                      aria-current={
                        currentSection === link.id ? "true" : undefined
                      }
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            {desktopLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={getDesktopLinkClass(currentSection === link.id)}
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
