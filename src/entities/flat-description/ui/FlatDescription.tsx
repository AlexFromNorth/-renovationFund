'use client';

import Image from 'next/image';
import { FlatDescriptionProps } from '../model/types';
import { useState } from 'react';

export const FlatDescription = ({ title, images, textBlocks, listBlocks }: FlatDescriptionProps) => {
  const [showAllText, setShowAllText] = useState(false);

  return (
    <div className="flat-description border rounded-md p-4 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      {/* Изображения */}
      <div className="flex gap-4 overflow-x-auto mb-4">
        {images.map((img, i) => (
          <div key={i} className="flex-shrink-0 w-48 h-32 relative">
            <Image src={img.src} alt={img.alt || 'flat'} fill className="object-cover rounded" />
          </div>
        ))}
      </div>

      {/* Основной текст */}
      <div className="mb-4">
        {textBlocks.slice(0, showAllText ? undefined : 2).map((text, i) => (
          <p key={i} className="mb-2 text-gray-700 dark:text-gray-300">{text}</p>
        ))}
        {textBlocks.length > 2 && (
          <button
            onClick={() => setShowAllText(!showAllText)}
            className="text-blue-600 hover:underline"
          >
            {showAllText ? 'Скрыть' : 'Показать всё'}
          </button>
        )}
      </div>

      {/* Списки */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {listBlocks.map((list, i) => (
          <ul key={i} className="list-disc pl-5 text-gray-700 dark:text-gray-300">
            {list.map((item, j) => (
              <li key={j} className="mb-1">{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};