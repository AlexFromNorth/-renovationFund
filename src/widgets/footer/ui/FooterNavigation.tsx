// widgets/footer/ui/FooterNavigation.tsx
import Link from "next/link";
import { FOOTER_LINKS } from "../config/links";

export const FooterNavigation = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-8">
        {FOOTER_LINKS.map((column, index) => (
          <nav key={index} className="flex min-w-[200px] flex-col gap-3">
            {column.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
    </div>
  );
};
