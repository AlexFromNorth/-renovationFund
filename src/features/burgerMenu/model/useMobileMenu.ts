import { useState } from 'react';

export const useMobileMenu = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return { open, toggle, close };
};
