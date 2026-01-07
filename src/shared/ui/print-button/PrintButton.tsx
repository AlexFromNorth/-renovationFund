"use client";

import { PrintButtonProps } from "./types";

export const PrintButton = ({
  pdfUrl,
  fileName = "document.pdf",
  className = ""
}: PrintButtonProps) => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        group flex items-center gap-2
        px-4 py-2
        transition-all duration-200
        ${className}
      `}
      aria-label="Скачать PDF"
    >
      {/* SVG принтер */}
      <svg
        className="w-5 h-5  group-hover:text-red-500 transition-colors duration-200"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
        />
      </svg>

      <span className=" group-hover:text-red-600 font-medium transition-colors duration-200">
        Распечатать
      </span>

      {/* Красное свечение */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-red-500 group-hover:shadow-[0_0_8px_2px_rgba(239,68,68,0.3)] transition-all duration-200 pointer-events-none" />
    </button>
  );
};