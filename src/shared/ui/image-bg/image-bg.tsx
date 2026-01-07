"use client";

import Image from "next/image";
import { ReactNode } from "react";

interface ImageBgProps {
  src: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
  overlay?: boolean;
}

export const ImageBg = ({
  src,
  alt = "",
  children,
  className = "",
  overlay = true,
}: ImageBgProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl group ${className}`}
    >
      {/* Картинка-фон */}
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-500
          ease-out
          group-hover:scale-110
        "
      />

      {/* Затемнение */}
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}

      {/* Контент поверх */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  );
};
