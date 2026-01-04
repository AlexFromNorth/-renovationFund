'use client';

import { useEffect, useRef, useState } from 'react';

export const useHeaderScroll = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // если скроллим вниз — скрываем
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false);
      }

      // если вверх — показываем
      if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return visible;
};
