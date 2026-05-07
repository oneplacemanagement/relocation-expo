'use client';

import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import {
  sponsorsByTier,
  tierMeta,
  TIER_ORDER,
  type Sponsor,
  type SponsorTier,
} from '@/data/sponsors';

/** Tier still drives the colour of the card top-border so hierarchy reads at a glance. */
const tierAccent: Record<SponsorTier, string> = {
  Sponsor: 'border-t-4 border-accent-yellow',
  Platinum: 'border-t-2 border-accent-yellow/60',
  Gold: 'border-t-2 border-amber-400/50',
  Digital: 'border-t border-blue-grey/40',
};

function SponsorCard({ s, accent }: { s: Sponsor; accent: string }) {
  const inner = (
    <div
      className={`group relative bg-off-white/5 hover:bg-off-white/10 border border-blue-grey/30 hover:border-accent-yellow/50 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(239,197,68,0.25)] h-full ${accent}`}
    >
      <div
        className={`relative w-full h-40 md:h-44 flex items-center justify-center ${
          s.hasBackground ? 'bg-white rounded-xl p-4' : ''
        }`}
      >
        <Image
          src={s.logo}
          alt={`${s.name} logo`}
          fill
          className="object-contain p-2"
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
        aria-label={`${s.name} — visit website`}
        className="block h-full"
      >
        {inner}
      </a>
    );
  }
  return inner;
}

export function SponsorsTieredSection() {
  const totalCount = TIER_ORDER.reduce(
    (acc, t) => acc + sponsorsByTier[t].length,
    0,
  );
  return (
    <Section id="whos-exhibiting" background="navy" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-accent-yellow/[0.04] blur-3xl rounded-full"
      />
      <Container>
        <Reveal className="text-center mb-14">
          <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
            {totalCount} Confirmed Exhibitors
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-off-white mb-4 leading-tight">
            Who&apos;s <span className="text-accent-yellow">Exhibiting</span>?
          </h2>
          <p className="text-lg md:text-xl text-off-white/70 max-w-2xl mx-auto">
            The companies hiring you in Australia. Real Aussie employers, migration specialists and relocation partners — confirmed for 2026, with new names joining every week.
          </p>
        </Reveal>

        <div className="space-y-16">
          {TIER_ORDER.map((tier) => {
            const list = sponsorsByTier[tier];
            if (list.length === 0) return null;
            const meta = tierMeta[tier];
            return (
              <Reveal key={tier} className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2">
                  <h3 className="text-accent-yellow font-display text-2xl md:text-3xl font-bold tracking-tight">
                    {meta.label}
                  </h3>
                  <div className="h-px flex-1 mx-4 bg-gradient-to-r from-accent-yellow/40 via-blue-grey/30 to-transparent hidden md:block" />
                  <span className="text-off-white/40 text-xs font-semibold uppercase tracking-widest">
                    {list.length} {list.length === 1 ? 'partner' : 'partners'}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                  {list.map((s) => (
                    <SponsorCard key={s.id} s={s} accent={tierAccent[tier]} />
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="text-center mt-16" delay={0.1}>
          <p className="text-off-white/70 mb-6 text-base md:text-lg">
            Want to join them and reach a sponsorship-ready audience from Ireland &amp; the UK?
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
