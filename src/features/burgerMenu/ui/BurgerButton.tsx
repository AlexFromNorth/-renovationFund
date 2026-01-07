"use client";

import { PropsButton } from "../model/types";

export const BurgerButton = ({ open, onClick }: PropsButton) => {
  return (
    <button onClick={onClick} className="lg:hidden p-2" aria-label="Open menu">
      <div className="space-y-1">
        <span className={`block h-0.5 w-6 bg-black transition bg-red-500 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
        <span className={`block h-0.5 w-6 bg-black transition bg-red-500 ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-black transition bg-red-500 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
      </div>
    </button>
  );
};
