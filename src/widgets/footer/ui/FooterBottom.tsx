// widgets/footer/ui/FooterBottom.tsx
import Image from "next/image";
import Link from "next/link";

export const FooterBottom = () => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          
          {/* Левая часть */}
          <div className="flex flex-col gap-3 max-w-md">
            <a
              href="https://stroi.mos.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-fit"
            >
              <Image
                src="/img/f_logo1.svg"
                alt="Stroi Mos"
                width={120}
                height={40}
              />
            </a>

            <div className="text-sm text-gray-500">Адрес:</div>

            <a
              href="https://yandex.ru/maps/-/CHXcQ6OI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700 hover:text-blue-600 dark:text-gray-300"
            >
              101000, Малый Златоустинский пер., д. 3, стр. 3
            </a>

            <a
              href="mailto:info@москварталы.рф"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300"
            >
              info@москварталы.рф
            </a>
          </div>

          {/* Правая часть */}
          <div className="flex flex-col gap-4 max-w-md">
            <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              +7 (495) 651-07-75
            </div>

            <button className="w-fit rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
              Оставить обращение
            </button>

            <div className="text-sm text-gray-500">
              Фонд реновации, 2017–2026
            </div>

            <a
              href="https://www.mos.ru/legal/rules/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400"
            >
              Соглашение о пользовании информационными системами и ресурсами города
              Москвы
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
