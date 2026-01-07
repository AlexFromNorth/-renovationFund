"use client";

import { useState, useRef, ReactNode } from "react";

interface HoverVideoProps {
  video: string;
  children?: ReactNode;
  className?: string;
}

export const HoverVideo = ({ video, children, className = "" }: HoverVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Ошибка воспроизведения:", error);
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded ${className}`}
    >
      {/* Видео */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-[-webkit-fill-available] object-cover rounded"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Контент поверх видео */}
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
};