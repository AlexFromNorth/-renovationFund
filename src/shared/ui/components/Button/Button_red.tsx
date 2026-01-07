"use client";

import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  className?: string; // добавляем необязательный className
  isActive?: boolean;
}

export const ButtonRed = ({ 
  children, 
  onClick, 
  className = "", 
  isActive = false 
}: Props) => {
  const baseClasses = "border-2 px-4 py-2 rounded-4xl transition-all duration-200";
  const activeClasses = isActive 
    ? "bg-red-500 text-white border-red-600" 
    : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white";
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${activeClasses} ${className}`}
    >
      {children}
    </button>
  );
};