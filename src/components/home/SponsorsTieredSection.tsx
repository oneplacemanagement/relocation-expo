'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { sponsorsByTier, sponsors, type Sponsor } from '@/data/sponsors';

function SponsorCard({ s, highlighted }: { s: Sponsor; highlighted?: boolean }) {
  const accent = highlighted
    ? 'border-t-4 border-accent-yellow'
    : 'border-t border-blue-grey/40';
  const inner = (
    <div
      className={`group relative bg-off-white/5 hover:bg-off-white/10 border border-blue-grey/30 hover:border-accent-yellow/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(239,197,68,0.25)] h-full ${accent}`}
    >
      <div
        className={`relative w-full h-40 md:h-44 flex items-center justify-center overflow-hidden ${
          s.hasBackground ? 'bg-white rounded-xl p-4' : ''
        }`}
      >
        <Image
          src={s.logo}
          alt={`${s.name} logo`}
          fill
          className={`object-contain ${s.logoScale ? 'p-1' : 'p-2'}`}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          unoptimized={s.logo.endsWith('.svg')}
        />
      </div>
      <div className="mt-5 text-center">
        <div className="text-off-white text-base font-semibold leading-tight">
          {s.name}
        </div>
        {s.industry && (
          <div className="text-off-white/55 text-xs mt-1">{s.industry}</div>
        )}
        {s.website && (
          <div className="flex items-center justify-center gap-1 text-accent-yellow/70 group-hover:text-accent-yellow text-[11px] font-semibold uppercase tracking-widest mt-2.5 transition-colors">
            <span>View More</span>
            <ExternalLink className="w-3 h-3" />
          </div>
        )}
      </div>
    </div>
  );
  if (s.website) {
    return (
      <a
        href={s.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${s.name} - visit website`}
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export function SponsorsTieredSection() {
  const headlineSponsors = sponsorsByTier['Sponsor'];
  const exhibitors = sponsors.filter((s) => s.tier !== 'Sponsor');

  return (
    <Section id="whos-exhibiting" background="navy" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-accent-yellow/[0.04] blur-3xl rounded-full"
      />
      <Container>
        <Reveal className="text-center mb-14">
          <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
            Confirmed Exhibitors
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-off-white mb-4 leading-tight">
            Who&apos;s <span className="text-accent-yellow">Exhibiting</span>?
          </h2>
          <p className="text-lg md:text-xl text-off-white/70 max-w-2xl mx-auto">
            The companies hiring you in Australia. Real Aussie employers, migration specialists and relocation partners - confirmed for 2026, with new names joining every week.
          </p>
        </Reveal>

        {/* Headline Sponsors */}
        {headlineSponsors.length > 0 && (
          <Reveal className="space-y-6 mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
              <h3 className="text-accent-yellow font-display text-2xl md:text-3xl font-bold tracking-tight">
                Headline Sponsors
              </h3>
              <div className="h-px flex-1 mx-4 bg-gradient-to-r from-accent-yellow/40 via-blue-grey/30 to-transparent hidden md:block" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
              {headlineSponsors.map((s) => (
                <SponsorCard key={s.id} s={s} highlighted />
              ))}
            </div>
          </Reveal>
        )}

        {/* All other exhibitors - flat grid, no tier labels */}
        {exhibitors.length > 0 && (
          <Reveal className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
              <h3 className="text-off-white font-display text-2xl md:text-3xl font-bold tracking-tight">
                Exhibitors
              </h3>
              <div className="h-px flex-1 mx-4 bg-gradient-to-r from-blue-grey/30 to-transparent hidden md:block" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {exhibitors.map((s) => (
                <SponsorCard key={s.id} s={s} />
              ))}
            </div>
          </Reveal>
        )}

        <Reveal className="text-center mt-16" delay={0.1}>
          <p className="text-off-white/70 mb-6 text-base md:text-lg">
            Want to join them and reach a sponsorship-ready audience from Ireland and the UK?
          </p>
          <Button href="/exhibit" size="lg" variant="outline">
            Why Exhibit?
            <svg
              className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
