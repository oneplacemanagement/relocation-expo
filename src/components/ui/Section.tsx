import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'navy' | 'dark' | 'light';
}

export function Section({ 
  children, 
  className = '', 
  id, 
  background = 'navy' 
}: SectionProps) {
  const bgClasses = {
    navy: 'bg-navy',
    dark: 'bg-navy/80',
    light: 'bg-blue-grey/10',
  };

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
