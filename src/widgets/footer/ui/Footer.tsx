// widgets/footer/ui/Footer.tsx
"use client";

import { FooterNavigation } from "./FooterNavigation";
import { FooterBottom } from "./FooterBottom";
import { Container } from "@/shared/ui/container";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <FooterNavigation />
        <FooterBottom />

    </footer>
  );
};
