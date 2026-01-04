// src/widgets/header/ui/Logo.tsx
import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <Image
        src="/assets/logos/header_logo.svg" 
        alt="Logo"
        width={32}
        height={32}
        priority 
        className="h-8 w-auto"
      />
    </Link>
  );
};