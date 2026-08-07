declare module "react-burger-menu" {
  import { ComponentType, ReactNode } from "react";

  export interface MenuState {
    isOpen: boolean;
  }

  export interface MenuProps {
    isOpen?: boolean;
    onStateChange?: (state: MenuState) => void;
    width?: number | string;
    right?: boolean;
    menuClassName?: string;
    burgerButtonClassName?: string;
    crossButtonClassName?: string;
    menuWrapClassName?: string;
    overlayClassName?: string;
    customBurgerIcon?: ReactNode | false;
    customCrossIcon?: ReactNode | false;
    disableAutoFocus?: boolean;
    children?: ReactNode;
  }

  export const slide: ComponentType<MenuProps>;
}
