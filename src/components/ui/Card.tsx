import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl transition-transform duration-300' : '';
  
  return (
    <div 
      className={`bg-blue-grey/20 backdrop-blur-sm border border-blue-grey/30 rounded-xl p-6 shadow-lg ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
