"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FlatDescriptionProps } from "../model/types";
import { Container } from "@/shared/ui/container";
import { ImageBg } from "@/shared/ui/image-bg";

export const FlatDescription = ({ title, images, textBlocks, listBlocks }: FlatDescriptionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container>
      <div className="py-16" ref={ref}>
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {/* Блок с изображениями и текстом */}
        <div className="flex justify-between mb-14 flex-col lg:flex-row">
          {/* Изображения */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="w-[100%] lg:w-[50%] relative mr-[6%] mb-6"
          >
            {images.map((img, i) => (
              <ImageBg 
                key={i}
                src={img.src} 
                className="h-[300px] p-6 !rounded-3xl"
              />
            ))}
          </motion.div>

          {/* Основной текст */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-[100%] lg:w-[50%] border rounded-3xl px-[4%] py-4 mb-6"
          >
            {textBlocks.map((text, i) => (
              <p 
                key={i} 
                className={`mb-2 ${i === 0 ? 'font-bold !text-xl' : '!font-normal !text-[16px]'}`}
              >
                {text}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Списки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {listBlocks.map((list, i) => (
            <ul key={i} className="">
              {list.map((item, j) => (
                <li key={j} className="mb-1 relative pl-3 before:absolute before:left-0 before:top-1 before:w-1.5 before:h-1.5 before:bg-[var(--secondary_red)] !text-xl font-normal mb-4">
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </Container>
  );
};