'use client';

import { FlatContactProps } from '../model/types';

export const FlatContact = ({ text, phone }: FlatContactProps) => {
  return (
    <div className="flat-contact bg-gray-50 dark:bg-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <div className="text-lg font-medium">{text}</div>
        <a href={`tel:${phone.replace(/\s|\(|\)/g, '')}`} className="text-blue-600 font-semibold">
          {phone}
        </a>
      </div>
    </div>
  );
};
