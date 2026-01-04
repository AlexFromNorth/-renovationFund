// src/widgets/header/ui/Logo.tsx
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link 
      href="/" 
      className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
    >
      MyApp
    </Link>
  );
};