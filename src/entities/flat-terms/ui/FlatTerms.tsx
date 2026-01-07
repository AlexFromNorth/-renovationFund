"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FlatTermsProps } from "../model/types";
import { Container } from "@/shared/ui/container";
import { ImageBg } from "@/shared/ui/image-bg";
import { MortgageCard } from "@/shared/ui/mortgager-card/ui/mortgager-card";

export const FlatTerms = ({ title, description, image, banks }: FlatTermsProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container className="my-12">
      <div ref={ref} className="flex flex-col lg:flex-row">
        {/* Левая часть */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="flex-1 lg:mr-8 mt-8 lg:mt-0"
        >
          {image && (
            <div className="relative w-full h-[100%]">
              <ImageBg src={image} className="p-6 h-[100%] min-h-[300px]">
                <div className="text-lg font-bold mb-2">{title}</div>
                {description && <div className="mb-2">{description}</div>}
                <a href="#" className="text-[var(--text_red)] absolute bottom-0">
                  Подробнее →
                </a>
              </ImageBg>
            </div>
          )}
        </motion.div>

        {/* Правая часть */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:w-[400px] w-full mt-8 lg:mt-0"
        >
          <MortgageCard banks={banks} className="w-full h-full" />
        </motion.div>
      </div>
    </Container>
  );
};