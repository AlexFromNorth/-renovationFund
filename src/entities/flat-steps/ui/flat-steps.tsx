'use client';

import { useState } from 'react';
import Image from 'next/image';
import { flatStepsProps } from '../model/types';

export const FlatSteps = ({ steps, banks, moreLink }: flatStepsProps) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="flat-steps flex flex-col md:flex-row gap-8 p-4 bg-white dark:bg-gray-800 rounded-md">

      {/* Левая часть: шаги */}
      <div className="flex-1 space-y-4">
        <h2 className="text-xl font-bold">Как купить в ипотеку?</h2>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex flex-col gap-2">
            {steps.map((step, i) => (
              <div
                key={step.id}
                className={`cursor-pointer p-2 rounded border ${activeStep === step.id ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
                onClick={() => setActiveStep(step.id)}
              >
                {step.title} {step.comment && <span className="text-sm text-gray-500">({step.comment})</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2">
          <div className="font-semibold">Шаг {activeStep}</div>
          <div className="p-2 border rounded bg-gray-50 dark:bg-gray-700">
            {steps.find(s => s.id === activeStep)?.title}
          </div>
          <a href={moreLink} className="text-blue-600 mt-2 inline-block">Подробнее →</a>
        </div>
      </div>

      {/* Правая часть: банки */}
      <div className="flex-1 space-y-2">
        <h3 className="text-lg font-semibold">Рассчитать ипотеку</h3>
        <div className="flex flex-wrap gap-2">
          {banks.map(bank => (
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
  );
};
