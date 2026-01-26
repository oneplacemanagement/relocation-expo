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
    id: 'aus-visa-solutions',
    name: 'Australian Visa Solutions',
    description: 'Registered migration agents specializing in skilled worker visas, family visas, and permanent residency pathways to Australia.',
    website: 'https://example.com',
    category: 'visa',
    destinations: ['Australia'],
    featured: true,
  },
  {
    id: 'global-migration-partners',
    name: 'Global Migration Partners',
    description: 'Expert immigration consultants for Australia, Canada, New Zealand, and the USA. Over 20 years of experience.',
    website: 'https://example.com',
    category: 'migration',
    destinations: ['Australia', 'Canada', 'New Zealand', 'USA'],
    featured: true,
  },
  {
    id: 'down-under-move',
    name: 'Down Under Move',
    description: 'Complete relocation services including shipping, accommodation, job search support, and settling-in assistance for Australia.',
    website: 'https://example.com',
    category: 'relocation',
    destinations: ['Australia'],
    featured: true,
  },
  {
    id: 'euro-visa-experts',
    name: 'European Visa Experts',
    description: 'Specialists in EU Golden Visa programs, work permits, and residency options across Europe.',
    website: 'https://example.com',
    category: 'visa',
    destinations: ['Portugal', 'Spain', 'Germany', 'Netherlands'],
    featured: true,
  },
  {
    id: 'canadian-pathways',
    name: 'Canadian Pathways Immigration',
    description: 'Licensed consultants for Express Entry, Provincial Nominee Programs, and study-to-work pathways in Canada.',
    website: 'https://example.com',
    category: 'migration',
    destinations: ['Canada'],
    featured: false,
  },
  {
    id: 'kiwi-careers',
    name: 'Kiwi Careers & Migration',
    description: 'New Zealand immigration and employment specialists. Skilled Migrant Category and Essential Skills Work Visa experts.',
    website: 'https://example.com',
    category: 'employment',
    destinations: ['New Zealand'],
    featured: false,
  },
];

// Note: This is example data. Actual exhibitors subject to confirmation.
