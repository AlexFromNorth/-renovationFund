'use client';

import Image from 'next/image';
import { FlatTermsProps } from '../model/types';

export const FlatTerms = ({ title, description, image, banks }: FlatTermsProps) => {
  return (
    <div id="object-usloviya-pokupki" className="flat-purchase-terms border rounded-md p-4 bg-white dark:bg-gray-800 space-y-4">
      
      <div className="flex flex-col md:flex-row gap-4">
        {/* Левая часть */}
        <div className="flex-1 space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
          {image && (
            <div className="relative w-full h-48 md:h-64">
              <Image src={image} alt={title} fill className="object-cover rounded" />
            </div>
          )}
        </div>

        {/* Правая часть */}
        <div className="flex-1 space-y-2">
          <h3 className="font-semibold">Рассчитать ипотеку</h3>
          <div className="flex flex-wrap gap-2">
            {banks.map((bank) => (
              <a key={bank.name} href={bank.url} target="_blank" className="block w-24 h-12 relative">
                <Image src={bank.logo} alt={bank.name} fill className="object-contain" />
              </a>
            ))}
          </div>
          <p className="text-sm text-gray-500">
            Сервис расчета ипотечных продуктов предоставляется на платформах банков-партнеров. Результаты расчетов не являются офертой и носят информационный характер.
          </p>
        </div>
      </div>

    </div>
  );
};
