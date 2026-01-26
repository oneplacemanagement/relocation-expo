import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'glass' | 'elevated';
  style?: React.CSSProperties;
}

export function Card({ children, className = '', hover = false, variant = 'default', style }: CardProps) {
  const hoverClasses = hover ? 'hover-lift cursor-pointer' : '';
  
  const variantClasses = {
    default: 'bg-blue-grey/20 backdrop-blur-sm border border-blue-grey/30',
    glass: 'glass-card',
    elevated: 'bg-gradient-to-br from-blue-grey/25 to-blue-grey/15 border border-blue-grey/40 shadow-2xl',
  };

  return (
    <div 
      className={`${variantClasses[variant]} rounded-2xl p-6 ${hoverClasses} ${className} transition-all duration-300`}
      style={style}
    >
      {children}
    </div>
  );
}
