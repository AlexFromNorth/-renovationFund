'use client';

import { NavLink } from '@/features/navLink';
import { NAV_ITEMS } from '@/widgets/header/config/navigation';
import { PropsMenu } from '../model/types';

export const MobileMenu = ({ open, onClose }: PropsMenu) => {
  if (!open) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-50">
      <nav className="flex flex-col p-4 gap-2">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} {...item} onClick={onClose} />
        ))}
      </nav>
    </div>
  );
};
