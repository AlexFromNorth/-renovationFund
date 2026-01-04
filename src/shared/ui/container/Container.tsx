// src/shared/ui/container/ui/Container.tsx
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full max-w-[1700px] px-[5%] ${className}`}>
      {children}
    </div>
  );
};