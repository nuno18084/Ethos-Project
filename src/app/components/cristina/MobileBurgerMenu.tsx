import { slide as BurgerMenu } from "react-burger-menu";
import { X } from "lucide-react";
import "../../../styles/burger-menu.css";

type Link = {
  name: string;
  href: string;
  id: string;
};

type MobileBurgerMenuProps = {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  links: Link[];
  currentSection: string | null;
};

export function MobileBurgerMenu({
  isOpen,
  onOpenChange,
  links,
  currentSection,
}: MobileBurgerMenuProps) {
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
