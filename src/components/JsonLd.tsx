import { eventData } from '@/data/event';
import { faqs } from '@/data/faqs';

/**
 * Server-rendered JSON-LD blocks. Search engines (Google in particular) use
 * these to surface rich event/FAQ results - date, venue, ticket link, price,
 * People-Also-Ask snippets - directly in the SERP.
 */
export function JsonLd() {
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: eventData.name,
    description: eventData.description,
    startDate: eventData.startDateISO,
    endDate: eventData.endDateISO,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: eventData.venue,
      address: {
        '@type': 'PostalAddress',
        streetAddress: "Jones' Road, Drumcondra",
        addressLocality: 'Dublin',
        postalCode: 'D03 P6K7',
        addressCountry: 'IE',
      },
    },
    image: ['https://therelocationexpo.com/og-image.jpg'],
    organizer: {
      '@type': 'Organization',
      name: 'Malone Consultancy',
      url: 'https://therelocationexpo.com',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Single Ticket',
        price: eventData.tickets.single.priceNumeric,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: eventData.tickets.single.wixHref,
        validFrom: '2026-05-01T00:00:00+01:00',
      },
      {
        '@type': 'Offer',
        name: 'Couple Ticket',
        price: eventData.tickets.couple.priceNumeric,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: eventData.tickets.couple.wixHref,
        validFrom: '2026-05-01T00:00:00+01:00',
      },
      {
        '@type': 'Offer',
        name: 'Family Pass',
        price: eventData.tickets.family.priceNumeric,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: eventData.tickets.family.wixHref,
        validFrom: '2026-05-01T00:00:00+01:00',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The Relocation Expo',
    url: 'https://therelocationexpo.com',
    logo: 'https://therelocationexpo.com/og-image.jpg',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: eventData.contactEmail,
        contactType: 'customer support',
        areaServed: ['IE', 'GB'],
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        email: eventData.partnerEmail,
        contactType: 'sales',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
    </>
  );
}
