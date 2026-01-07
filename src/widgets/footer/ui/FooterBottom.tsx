// widgets/footer/ui/FooterBottom.tsx
import { Container } from "@/shared/ui/container";
import Image from "next/image";
import Link from "next/link";

export const FooterBottom = () => {
  return (
    <div className="py-8 bg-red-600 text-white">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:justify-between text-left">
          {/* Левая часть */}
          <div className="flex flex-col gap-4 max-w-md ">
            <Link href="https://stroi.mos.ru/" target="_blank" rel="noopener noreferrer" className="inline-block w-fit hover:opacity-70 duration-300 ">
              <Image src="/assets/logos/footer_logo.svg" alt="Stroi Mos" width={120} height={40} className="h-16 w-auto" />
            </Link>

            <div className="text-sm">Адрес:</div>

            <Link
              href="https://yandex.ru/maps/-/CHXcQ6OI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm    transition-colors"
            >
              101000, Малый Златоустинский пер., д. 3, стр. 3
            </Link>

            <Link href="mailto:info@москварталы.рф" className="text-sm font-medium    transition-colors">
              info@москварталы.рф
            </Link>
          </div>

          {/* Правая часть */}
          <div className="flex flex-col gap-4 max-w-md text-right">
            <div className="flex items-center text-right justify-end">
              <Link href="tel:+74956510775" className="text-lg font-semibold pr-6">
                +7 (495) 651-07-75
              </Link>

              <Link
                href="/feedback"
                className="w-fit rounded-md border border-gray-300 px-4 py-2 text-sm font-medium  hover:bg-gray-100 transition-all hover:text-red-600"
              >
                Оставить обращение
              </Link>
            </div>

            <div className="text-sm  ">Фонд реновации, 2017–2026</div>

            <Link
              href="https://www.mos.ru/legal/rules/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm    transition-colors"
            >
              Соглашение о пользовании информационными системами и ресурсами города Москвы
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
