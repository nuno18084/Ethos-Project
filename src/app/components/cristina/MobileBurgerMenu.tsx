import { useEffect, useState } from "react";
import { slide as BurgerMenu } from "react-burger-menu";
import { ChevronDown, X } from "lucide-react";
import "../../../styles/burger-menu.css";

type Link = {
  name: string;
  href: string;
  id: string;
};

type MobileBurgerMenuProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  aboutLabel: string;
  aboutLinks: Link[];
  links: Link[];
  currentSection: string | null;
};

export function MobileBurgerMenu({
  isOpen,
  onOpenChange,
  aboutLabel,
  aboutLinks,
  links,
  currentSection,
}: MobileBurgerMenuProps) {
  const isAboutActive =
    currentSection === "about" || currentSection === "founder";
  const [aboutOpen, setAboutOpen] = useState(isAboutActive);

  useEffect(() => {
    if (isOpen) {
      setAboutOpen(isAboutActive);
    }
  }, [isOpen, isAboutActive]);

  return (
    <BurgerMenu
      right
      isOpen={isOpen}
      onStateChange={(state) => onOpenChange(state.isOpen)}
      customBurgerIcon={false}
      customCrossIcon={
        <X size={28} strokeWidth={1.5} className="text-stone-800" />
      }
      width="100%"
      menuClassName="ethos-bm-menu"
      burgerButtonClassName="ethos-bm-burger-hidden"
      crossButtonClassName="ethos-bm-cross-button"
      overlayClassName="ethos-bm-overlay"
      disableAutoFocus
    >
      <div className="ethos-bm-about">
        <button
          type="button"
          className={`ethos-bm-item ethos-bm-about-toggle${
            isAboutActive ? " ethos-bm-item--active" : ""
          }`}
          aria-expanded={aboutOpen}
          onClick={() => setAboutOpen((open) => !open)}
        >
          {aboutLabel}
          <ChevronDown
            size={18}
            strokeWidth={1.75}
            className={`ethos-bm-about-chevron${aboutOpen ? " rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
        {aboutOpen && (
          <div className="ethos-bm-about-links">
            {aboutLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => onOpenChange(false)}
                className={`ethos-bm-item ethos-bm-subitem${
                  currentSection === link.id ? " ethos-bm-item--active" : ""
                }`}
                aria-current={currentSection === link.id ? "true" : undefined}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => onOpenChange(false)}
          className={`ethos-bm-item${
            currentSection === link.id ? " ethos-bm-item--active" : ""
          }`}
          aria-current={currentSection === link.id ? "true" : undefined}
        >
          {link.name}
        </a>
      ))}
    </BurgerMenu>
  );
}
