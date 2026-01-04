'use client';

import Image from 'next/image';
import { FlatBannersProps } from '../model/types';

export const FlatBanners = ({ topBanners, wideBanner }: FlatBannersProps) => {
  return (
    <div className="flat-banners space-y-8">
      {/* Верхние баннеры */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topBanners.map((banner, i) => (
          <div key={i} className="relative border rounded-md overflow-hidden p-2">
            <div className="text-lg font-bold mb-2">{banner.title}</div>
            {banner.text && <div className="text-gray-700 dark:text-gray-300 mb-2">{banner.text}</div>}

            {banner.video && (
              <video
                muted
                loop
                autoPlay
                playsInline
                poster={banner.image}
                className="w-full h-48 object-cover rounded"
              >
                <source src={banner.video} type="video/mp4" />
              </video>
            )}

            {banner.image && !banner.video && (
              <div className="relative w-full h-48">
                <Image src={banner.image} alt={banner.title} fill className="object-cover rounded" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Широкий баннер */}
      {wideBanner && (
        <div className="wide-banner relative border rounded-md overflow-hidden p-2">
          <div className="text-lg font-bold mb-2">{wideBanner.title}</div>
          {wideBanner.text && <div className="text-gray-700 dark:text-gray-300 mb-2">{wideBanner.text}</div>}

          {wideBanner.video && (
            <video
              muted
              loop
              autoPlay
              playsInline
              poster={wideBanner.image}
              className="w-full h-64 object-cover rounded"
            >
              <source src={wideBanner.video} type="video/mp4" />
            </video>
          )}

          {wideBanner.image && !wideBanner.video && (
            <div className="relative w-full h-64">
              <Image src={wideBanner.image} alt={wideBanner.title} fill className="object-cover rounded" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
