/**
 * Canonical event configuration.
 * Update prices, deadlines and Wix ticket links here in one place.
 */

const TICKET_BASE = 'https://tickets.therelocationexpo.com/events/the-relocation-expo';

/** Helper that appends UTM params + an optional preselected ticket variant to the Wix link */
const ticketUrl = (
  utmContent: string,
  variant?: 'single' | 'couple' | 'family',
) => {
  const params = new URLSearchParams({
    utm_source: 'site',
    utm_medium: 'cta',
    utm_campaign: 'tickets-2026',
    utm_content: utmContent,
  });
  if (variant) params.set('ticket', variant);
  return `${TICKET_BASE}?${params.toString()}`;
};

/**
 * Internal checkout deep-link. Lands on our embedded /tickets page with the
 * right tier pre-selected; users never bounce to Wix unprompted.
 */
const internalCheckout = (variant?: 'single' | 'couple' | 'family') => {
  if (!variant) return '/tickets#secure-checkout';
  return `/tickets?ticket=${variant}#secure-checkout`;
};

export const eventData = {
  name: 'The Relocation Expo',
  tagline: 'One Day. One Roof. Your New Life in Australia — Solved.',
  date: 'Sunday 27th September 2026',
  dateISO: '2026-09-27',
  endDateISO: '2026-09-27T17:30:00+01:00',
  startDateISO: '2026-09-27T11:00:00+01:00',
  hours: '11:00am – 5:30pm',
  venue: 'Croke Park, Dublin',
  address: "Croke Park, Jones' Road, Drumcondra, Dublin 3, D03 P6K7, Ireland",
  contactEmail: 'info@therelocationexpo.com',
  partnerEmail: 'partner@therelocationexpo.com',
  registrationLink: '/tickets',
  freeEntry: false,
  /** Kept for reference; early-bird period has expired */
  earlyBirdEndsISO: '2026-05-31T23:59:00+01:00',
  ticketUrl: TICKET_BASE,
  primaryCTA: {
    text: 'Buy Tickets',
    href: internalCheckout(),
  },
  secondaryCTA: {
    text: 'Exhibitor Opportunities',
    href: '/exhibit',
  },
  tickets: {
    single: {
      label: 'Single',
      price: '€15',
      priceNumeric: 15,
      description: 'One adult — full-day access, all stages, all clinics.',
      /** Internal route used by every Buy-CTA on the site. */
      href: internalCheckout('single'),
      /** Real Wix purchase URL — used by JSON-LD schema for Google rich results only. */
      wixHref: ticketUrl('single', 'single'),
      perks: [
        'Full-day Expo access',
        'Migration clinics',
        'Main-stage talks',
        'Resource pack',
      ],
    },
    couple: {
      label: 'Couple',
      price: '€25',
      priceNumeric: 25,
      description: 'Two adults — perfect for partners planning the move together.',
      href: internalCheckout('couple'),
      wixHref: ticketUrl('couple', 'couple'),
      perks: [
        'Two adult tickets',
        'Best value per person',
        'Joint clinic bookings',
        'Resource packs',
      ],
      featured: true,
    },
    family: {
      label: 'Family Pass',
      price: '€35',
      priceNumeric: 35,
      description: 'Two adults + up to 3 children — bring everyone along.',
      href: internalCheckout('family'),
      wixHref: ticketUrl('family', 'family'),
      perks: [
        '2 adults + up to 3 kids',
        'Family-friendly stage',
        'Kids-zone activities',
        'Resource packs',
      ],
    },
  },
  socialLinks: {
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
  },
  /** SEO-friendly description (kept tight) */
  description:
    'The Relocation Expo brings Australia’s leading employers, registered migration agents, and relocation specialists to Croke Park, Dublin — one day, one roof, all the answers for people moving to Australia.',
  disclaimer:
    'Information provided at The Relocation Expo is general in nature and does not constitute legal advice. Always confirm visa requirements and eligibility with licensed migration agents or legal professionals.',
  /** YouTube video ID for the Croke Park aerial section (also used as ambient hero bg). */
  crokeParkVideoId: 'h4efEirg29w',
};

export const ctaUrl = ticketUrl;
