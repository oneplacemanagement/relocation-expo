import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'yellow' | 'blue' | 'grey';
  className?: string;
}

export function Badge({ children, variant = 'yellow', className = '' }: BadgeProps) {
  const variantClasses = {
    yellow: 'bg-accent-yellow text-navy',
    blue: 'bg-blue-grey text-off-white',
    grey: 'bg-muted-grey text-off-white',
  };

  return (
    <span 
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
