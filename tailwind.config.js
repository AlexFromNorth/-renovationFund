// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./widgets/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
    "./entities/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
  ],
  darkMode: 'class', // или 'media', если хочешь авто-дарк
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        primary: "#0072BA",
        secondary: "#E90002",
        accent: "#F5A623",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        mono: ["monospace"],
      },
    },
  },
  plugins: [],
};
