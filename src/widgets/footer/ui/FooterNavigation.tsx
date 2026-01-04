// widgets/footer/ui/FooterNavigation.tsx
import Link from "next/link";
import { FOOTER_LINKS } from "../config/links";
import { Container } from "@/shared/ui/container";

export const FooterNavigation = () => {
  return (
    <div className=" bg-gray-100">
      <Container>
        <div className="flex flex-wrap py-16 gap-2 justify-between">
          {FOOTER_LINKS.map((column, index) => (
            <nav key={index} className="flex min-w-[200px] flex-col gap-6">
              {column.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className=" text-gray-700 hover:text-gray-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </Container>
    </div>
  );
};
