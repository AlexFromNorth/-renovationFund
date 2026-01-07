// src/shared/ui/container/ui/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const ContainerCard = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full p-[39px] ${className}`}>
      {children}
    </div>
  );
};