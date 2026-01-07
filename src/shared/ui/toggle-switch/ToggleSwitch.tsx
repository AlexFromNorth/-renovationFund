"use client";

import { useState, useEffect } from "react";

interface ToggleSwitchProps {
  initial?: boolean;
  onChange?: (state: boolean) => void;
  disabled?: boolean;
}

export const ToggleSwitch = ({ initial = false, onChange, disabled = false }: ToggleSwitchProps) => {
  const [isOn, setIsOn] = useState(initial);

  const handleClick = () => {
    if (disabled) return;
    setIsOn(!isOn);
  };

  useEffect(() => {
    onChange?.(isOn);
  }, [isOn, onChange]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none border border-green-500
        ${isOn ? "!border-green-500" : "border-gray-300"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
    >
      <span
        className={`absolute top-0 left-0 w-6 h-[-webkit-fill-available] rounded-full shadow-md transform transition-transform duration-300   
          ${isOn ? "translate-x-6 bg-green-500" : "translate-x-0"}`}
      />
    </button>
  );
};
