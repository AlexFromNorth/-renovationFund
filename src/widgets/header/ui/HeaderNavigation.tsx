import { NavLink } from '@/features/navLink';
import { NAV_ITEMS } from '../config/navigation';

export const HeaderNavigation = () => {
  return (
    <div className="relative">
      {/* Desktop */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.href} {...item} />
        ))}
      </nav>
    </div>
  );
};
