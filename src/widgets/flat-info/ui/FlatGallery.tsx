"use client";

import { useState } from "react";
import Image from "next/image";
import { FlatImage } from "@/entities/flat-info/model/types";
import { ButtonRed } from "@/shared/ui/components/Button";

interface FlatGalleryProps {
  images: FlatImage[];
}

export const FlatGallery = ({ images }: FlatGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeImage = images[activeIndex];

  return (
    <div className="mt-14 flex-grow">
      <Image
        src={activeImage.src}
        alt={activeImage.alt || "flat"}
        width={500}
        height={350}
        className="rounded mb-3 m-auto w-[475px] h-[425px] object-contain"
      />

      <div className="flex gap-2 justify-center my-14">
        {images.slice(0, 3).map((img, index) => (
          <ButtonRed key={img.id} onClick={() => setActiveIndex(index)} isActive={activeIndex === index}>
            {img.title ?? `Вид ${index + 1}`}
          </ButtonRed>
        ))}
      </div>
    </div>
  );
};
