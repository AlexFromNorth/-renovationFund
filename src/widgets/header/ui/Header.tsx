"use client";

import { Logo } from "@/shared/ui/logo";
import { LikeButton } from "@/features/likeButton";
import { HeaderNavigation } from "./HeaderNavigation";
import { BurgerButton } from "@/features/burgerMenu/ui/BurgerButton";
import { MobileMenu } from "@/features/burgerMenu/ui/MobileMenu";
import { useMobileMenu } from "@/features/burgerMenu/model/useMobileMenu";
import { useHeaderScroll } from "../model/useHeaderScroll";
import { Container } from "@/shared/ui/container";

export const Header = () => {
  const { open, toggle, close } = useMobileMenu();
  const isVisible = useHeaderScroll();

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <Container>
          <div className="flex h-16 items-center justify-between">
            <Logo />

            <HeaderNavigation />

            <div className="flex items-center gap-2">
              <LikeButton />
              <BurgerButton open={open} onClick={toggle} />
              <MobileMenu open={open} onClose={close} />
            </div>
          </div>
      </Container>
    </header>
  );
};
