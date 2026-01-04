// widgets/header/ui/HeaderNavigation.tsx
"use client";

import { NavLink } from "@/features/navLink";
import { NAV_ITEMS } from "../config/navigation";



export const HeaderNavigation = () => {
  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>

      {/* Mobile */}
      <nav className="md:hidden flex flex-wrap gap-2 py-4 border-t mt-2">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>
    </>
  );
};
