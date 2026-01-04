// src/widgets/header/ui/NavLink.tsx
'use client';

import { cn } from '@/shared/lib/store';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  label: string;
}

export const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'px-2 py-2 rounded-md text-sm font-medium transition-colors',
        isActive
          ? 'text-red-800'
          : 'text-gray-800 hover:text-red-800'
      )}
    >
      {label}
    </Link>
  );
};