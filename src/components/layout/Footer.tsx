import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { eventData } from '@/data/event';
import { Mail, MapPin, Calendar } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  const navigation = [
    { href: '/', label: 'Home' },
    { href: '/tickets', label: 'Tickets' },
    { href: '/#whos-exhibiting', label: "Who's Exhibiting?" },
    { href: '/exhibitors', label: 'Exhibitor Directory' },
    { href: '/exhibit', label: 'Why Exhibit?' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const legal = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ];

  return (
    <footer className="relative bg-navy-deep border-t border-blue-grey/20 overflow-hidden">
      {/* Subtle decorative gradient */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-accent-yellow/[0.04] blur-3xl rounded-full pointer-events-none"
      />

      {/* Top CTA strip */}
      <div className="relative border-b border-blue-grey/20 bg-gradient-to-r from-accent-yellow/[0.06] via-transparent to-accent-yellow/[0.06]">
        <Container>
          <div className="py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-off-white leading-tight">
                Ready to start your{' '}
                <span className="text-accent-yellow">Australian future?</span>
              </h3>
              <p className="text-off-white/60 text-sm mt-1">
                Tickets on sale now - limited availability.
              </p>
            </div>
            <a
              href={eventData.tickets.single.href}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-yellow to-accent-yellow-glow text-navy font-bold px-7 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Buy Tickets - From €15
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/White--Globe-Icon.png"
                alt=""
                aria-hidden="true"
                width={48}
                height={48}
                className="h-11 w-auto mix-blend-screen"
              />
              <Image
                src="/images/White-Text (1).png"
                alt="The Relocation Expo"
                width={180}
                height={36}
                className="h-7 w-auto mix-blend-screen"
              />
            </div>
            <p className="text-off-white/65 text-sm max-w-md leading-relaxed mb-6">
              {eventData.description}
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-start gap-2 text-off-white/75">
                <Calendar className="w-4 h-4 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-off-white">Sunday 27 September 2026</strong>
                  <span className="text-off-white/50"> · 11am-5:30pm</span>
                </span>
              </p>
              <p className="flex items-start gap-2 text-off-white/75">
                <MapPin className="w-4 h-4 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span>{eventData.address}</span>
              </p>
              <p className="flex items-start gap-2 text-off-white/75">
                <Mail className="w-4 h-4 text-accent-yellow mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${eventData.contactEmail}`}
                  className="hover:text-accent-yellow transition-colors"
                >
                  {eventData.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-accent-yellow font-bold text-sm uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navigation.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-off-white/70 hover:text-accent-yellow transition-colors text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners + visiting Dublin */}
          <div>
            <h3 className="text-accent-yellow font-bold text-sm uppercase tracking-widest mb-4">
              Partners
            </h3>
            <ul className="space-y-2.5 text-sm mb-7">
              <li>
                <a
                  href={`mailto:${eventData.partnerEmail}?subject=Exhibitor%20Package%20Enquiry`}
                  className="text-off-white/70 hover:text-accent-yellow transition-colors"
                >
                  Exhibitor packages
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${eventData.partnerEmail}?subject=Media%20Enquiry`}
                  className="text-off-white/70 hover:text-accent-yellow transition-colors"
                >
                  Media enquiries
                </a>
              </li>
              <li>
                <Link
                  href="/exhibit"
                  className="text-off-white/70 hover:text-accent-yellow transition-colors"
                >
                  Why Exhibit?
                </Link>
              </li>
            </ul>

            <h3 className="text-accent-yellow font-bold text-sm uppercase tracking-widest mb-4">
              Visiting Dublin
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://crokepark.ie/skyline"
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-off-white/70 hover:text-accent-yellow transition-colors inline-flex items-center gap-1.5"
                >
                  Croke Park Skyline Tour
                  <span aria-hidden="true" className="text-[10px]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-blue-grey/20 py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
          <div className="text-off-white/45">
            <p>© {year} The Relocation Expo. All rights reserved.</p>
            <p className="mt-1">
              Operated by Malone Consultancy WA Pty Ltd · ABN 14697839642
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-off-white/55 hover:text-accent-yellow transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-off-white/35 text-[11px] pb-6 leading-relaxed max-w-4xl">
          {eventData.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
