"use client";

import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Наверх"
      className="
        fixed bottom-6 right-6 z-50
        h-12 w-12 rounded-full
        border border-red-500
        bg-white text-red-500
        flex items-center justify-center
        shadow-lg
        transition
        hover:bg-red-500 hover:text-white
        active:scale-95
      "
    >
      ↑
    </button>
  );
};
