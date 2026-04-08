export interface Exhibitor {
  id: string;
  name: string;
  description: string;
  website?: string;
  category: 'visa' | 'migration' | 'relocation' | 'financial' | 'employment' | 'other';
  destinations: string[];
  featured: boolean;
}

export const exhibitors: Exhibitor[] = [
  {
    id: 'aus-visa-specialist',
    name: 'Registered Migration Agency',
    description: 'Registered migration agents specialising in skilled worker visas, family visas, and permanent residency pathways to Australia.',
    category: 'visa',
    destinations: ['Australia'],
    featured: true,
  },
  {
    id: 'multi-destination-migration',
    name: 'International Immigration Consultants',
    description: 'Expert immigration consultants specialising in employer-sponsored visas, skilled migration, and permanent residency pathways to Australia.',
    category: 'migration',
    destinations: ['Australia'],
    featured: true,
  },
  {
    id: 'relocation-services',
    name: 'Full-Service Relocation Provider',
    description: 'End-to-end relocation services including international shipping, temporary accommodation, job search support, and settling-in assistance.',
    category: 'relocation',
    destinations: ['Australia'],
    featured: true,
  },
  {
    id: 'financial-planning',
    name: 'Expat Financial Planning Service',
      description: 'Specialist financial advice for people relocating to Australia — covering currency transfer, superannuation, tax obligations, and long-term financial planning.',
    category: 'financial',
    destinations: ['Australia'],
    featured: true,
  },
  {
    id: 'healthcare-recruiter',
    name: 'Healthcare Recruitment Agency',
    description: 'Connecting Irish and UK healthcare professionals with Australian hospitals, aged care facilities, and medical practices actively seeking international talent.',
    category: 'employment',
    destinations: ['Australia'],
    featured: false,
  },
  {
    id: 'construction-recruiter',
    name: 'Construction & Trades Recruiter',
    description: 'Specialists in placing Irish and UK tradespeople, engineers, and construction professionals with Australian employers offering visa sponsorship.',
    category: 'employment',
    destinations: ['Australia'],
    featured: false,
  },
];

// Exhibitor details subject to confirmation. Final exhibitor list will be published closer to the event.
