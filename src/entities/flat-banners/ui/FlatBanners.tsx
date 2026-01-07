"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FlatBannersProps } from "../model/types";
import { Container } from "@/shared/ui/container";
import { ImageBg } from "@/shared/ui/image-bg";
import { HoverVideo } from "@/shared/ui/hover-video";
import { ContainerCard } from "@/shared/ui/container-card";

export const FlatBanners = ({ topBanners, wideBanner }: FlatBannersProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Container>
      <div className="space-y-8" ref={ref}>
        {/* Верхние баннеры */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topBanners.map((banner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.24 }}
              className="relative rounded-md overflow-hidden p-0"
            >
              {banner.video && (
                <HoverVideo video={banner.video} className="h-[100%]">
                  <ContainerCard>
                    <div className="!text-[23px] font-bold mb-2 text-white ">{banner.title}</div>
                    {banner.text && banner.text.split(/<br\s*\/?>/i).map((line, index) => (
                      <div key={index} className={index > 0 ? "mt-1 text-white opacity-90" : "opacity-90 text-white"}>
                        {line}
                      </div>
                    ))}
                  </ContainerCard>
                </HoverVideo>
              )}

              {banner.image && !banner.video && (
                <div className="relative w-full h-auto">
                  <ImageBg src={banner.image} className="h-[300px] p-6">
                    <ContainerCard>
                      <div className="!text-[23px] font-bold mb-2 text-white">{banner.title}</div>
                      {banner.text && <div className="text-white mb-2">{banner.text}</div>}
                    </ContainerCard>
                  </ImageBg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Широкий баннер */}
        {wideBanner && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.2, delay: topBanners.length * 0.005 }}
            className="relative rounded-md overflow-hidden"
          >
            {wideBanner.image && !wideBanner.video && (
              <div className="relative w-full h-[360px] grid">
                <ImageBg src={wideBanner.image} className="h-auto object-cover w-auto">
                  <ContainerCard>
                    <div className="!text-[23px] font-bold mb-2">{wideBanner.title}</div>
                    {wideBanner.text && <div className="mb-2 w-[60%]">{wideBanner.text}</div>}
                  </ContainerCard>
                </ImageBg>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Container>
  );
};