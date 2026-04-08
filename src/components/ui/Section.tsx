import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'navy' | 'dark' | 'light';
  backgroundImage?: string;
  backgroundImageAlt?: string;
  overlayIntensity?: 'light' | 'medium' | 'heavy';
}

export function Section({
  children,
  className = '',
  id,
  background = 'navy',
  backgroundImage,
  backgroundImageAlt = '',
  overlayIntensity = 'heavy',
}: SectionProps) {
  const bgClasses = {
    navy: 'bg-navy',
    dark: 'bg-navy/80',
    light: 'bg-blue-grey/10',
  };

  const overlayClasses = {
    light: 'bg-navy/50',
    medium: 'bg-navy/70',
    heavy: 'bg-navy/85',
  };

  if (backgroundImage) {
    return (
      <section
        id={id}
        className={`relative overflow-hidden py-16 md:py-24 ${bgClasses[background]} ${className}`}
      >
        {/* Background photo layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={backgroundImage}
            alt={backgroundImageAlt}
            className="w-full h-full object-cover opacity-30"
            aria-hidden="true"
          />
          <div className={`absolute inset-0 ${overlayClasses[overlayIntensity]}`} aria-hidden="true" />
        </div>
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      {children}
    </section>
  );
}
