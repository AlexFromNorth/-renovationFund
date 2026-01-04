// widgets/header/ui/Header.tsx
"use client";

import { Logo } from "@/shared/ui/logo";
import { LikeButton } from "@/features/likeButton";
import { HeaderNavigation } from "./HeaderNavigation";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <HeaderNavigation />
          <LikeButton />
        </div>
      </div>
    </header>
  );
};
