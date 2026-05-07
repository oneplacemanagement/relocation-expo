/**
 * Canonical Sponsors / Exhibitors data for The Relocation Expo 2026.
 * Order within each tier is the order of confirmation.
 * Logos live in /public/sponsors/ — see /public/sponsors/README.md if added.
 */

export type SponsorTier = 'Platinum' | 'Gold' | 'Sponsor' | 'Digital';

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  logo: string;
  website?: string;
  description?: string;
  /** Industry tag — used on the directory cards */
  industry?: string;
  /** Whether the logo PNG/JPG has a coloured background and needs a white panel behind it on dark sections */
  hasBackground?: boolean;
  /** Logo is a mark / icon only (no readable company name in the artwork). Marquee will render the name as a caption beside it. */
  markOnly?: boolean;
}

export const sponsors: Sponsor[] = [
  // ─── PLATINUM ─────────────────────────────────────────────────────────
  {
    id: 'mason-transport',
    name: 'Mason Transport',
    tier: 'Platinum',
    logo: '/sponsors/mason-transport.jpg',
    website: 'https://masontransport.com',
    industry: 'Transport & Relocation',
    hasBackground: true,
  },
  {
    id: 'innovent-engineering',
    name: 'Innovent Engineering',
    tier: 'Platinum',
    logo: '/sponsors/innovent-engineering.png',
    website: 'https://innoventeng.com',
    industry: 'Engineering',
  },
  {
    id: 'edmc',
    name: 'EDMC Group',
    tier: 'Platinum',
    logo: '/sponsors/edmc.jpg',
    website: 'https://www.edmcgroup.com',
    industry: 'Mining & Civil Maintenance',
    hasBackground: true,
  },

  // ─── GOLD ─────────────────────────────────────────────────────────────
  {
    id: 'a1-engineering',
    name: 'A1 Engineering',
    tier: 'Gold',
    logo: '/sponsors/a1-engineering.jpg',
    website: 'https://a-1engineering.com.au',
    industry: 'Engineering',
    hasBackground: true,
  },
  {
    id: 'workforce-training-group',
    name: 'Workforce Training Group',
    tier: 'Gold',
    logo: '/sponsors/workforce-training-group.jpg',
    website: 'https://workforcetraining.com.au',
    industry: 'Training & Upskilling',
  },

  // ─── SPONSOR ──────────────────────────────────────────────────────────
  {
    id: 'seven-migration',
    name: 'Seven Migration',
    tier: 'Sponsor',
    logo: '/sponsors/seven-migration.png',
    website: 'https://www.sevenmigration.com.au',
    industry: 'Migration & Visas',
  },
  {
    id: 'westforce-construction',
    name: 'Westforce Construction',
    tier: 'Sponsor',
    logo: '/sponsors/westforce-construction.png',
    website: 'https://westforce.com.au',
    industry: 'Construction',
  },
  {
    id: 'kilmore-group',
    name: 'Kilmore Group',
    tier: 'Sponsor',
    logo: '/sponsors/kilmore-group.svg',
    website: 'https://kilmoregroup.com.au',
    industry: 'Construction & Remediation',
  },
  {
    id: 'long-reach-recruitment',
    name: 'Long Reach Recruitment',
    tier: 'Sponsor',
    logo: '/sponsors/long-reach-recruitment.svg',
    website: 'https://www.longreachrecruitment.com.au',
    industry: 'Property & Construction Recruitment',
  },
  {
    id: 'aussieos-global-mobility',
    name: 'AussieOS Global Mobility',
    tier: 'Sponsor',
    logo: '/sponsors/aussieos-global-mobility.png',
    website: 'https://www.aussieos.com.au',
    industry: 'Relocation Services',
  },
  {
    id: 'cailin-mining',
    name: 'Cailin Mining & Civil',
    tier: 'Sponsor',
    logo: '/sponsors/cailin-mining-mark.svg',
    website: 'https://www.cailinminingcivil.com',
    industry: 'Mining & Civil Training',
    markOnly: true,
  },

  // ─── DIGITAL ──────────────────────────────────────────────────────────
  {
    id: 'labour-wave',
    name: 'Labour Wave',
    tier: 'Digital',
    logo: '/sponsors/labour-wave.png',
    website: 'https://labourwave.com.au',
    industry: 'Mechanical, Fabrication & Labour Hire',
  },
  {
    id: 'journee-agency',
    name: 'Journee Agency',
    tier: 'Digital',
    logo: '/sponsors/journee-agency.png',
    website: 'https://www.journeeagency.com',
    industry: 'Perth Relocation Specialists',
  },
  {
    id: 'kemmy-construction',
    name: 'Kemmy Construction',
    tier: 'Digital',
    logo: '/sponsors/kemmy-construction.jpg',
    website: 'https://kemmyconstruction.com.au',
    industry: 'Brickwork & Masonry',
    hasBackground: true,
  },
];

export const sponsorsByTier = {
  Sponsor: sponsors.filter((s) => s.tier === 'Sponsor'),
  Platinum: sponsors.filter((s) => s.tier === 'Platinum'),
  Gold: sponsors.filter((s) => s.tier === 'Gold'),
  Digital: sponsors.filter((s) => s.tier === 'Digital'),
};

/**
 * Tier hierarchy per the 2026 Exhibitor Packages PDF, top → bottom:
 *   Sponsor (Maximum Impact)  →  Platinum (Prime Location)
 *   →  Gold (Stand Included)  →  Digital (Online Exposure)
 * Display order is driven by `TIER_ORDER` in consumer files.
 */
export const TIER_ORDER: SponsorTier[] = ['Sponsor', 'Platinum', 'Gold', 'Digital'];

export const tierMeta: Record<
  SponsorTier,
  { label: string; tagline: string; description: string; ringColor: string }
> = {
  Sponsor: {
    label: 'Headline Sponsors',
    tagline: 'Maximum Impact',
    description: 'Main-stage speakers and corner-booth headline partners.',
    ringColor: 'ring-accent-yellow',
  },
  Platinum: {
    label: 'Platinum Exhibitors',
    tagline: 'Prime Location',
    description: 'Shell-scheme booths in the highest-traffic walking zones.',
    ringColor: 'ring-accent-yellow/70',
  },
  Gold: {
    label: 'Gold Exhibitors',
    tagline: 'Stand Included',
    description: 'Dressed trestle stands in the main exhibitor hall.',
    ringColor: 'ring-amber-400/60',
  },
  Digital: {
    label: 'Digital Exhibitors',
    tagline: 'Online Exposure',
    description: 'Featured online — logos, QR codes and email campaigns.',
    ringColor: 'ring-blue-grey/40',
  },
};
