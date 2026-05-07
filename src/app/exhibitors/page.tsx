import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { sponsorsByTier, sponsors, type Sponsor } from '@/data/sponsors';
import { ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Who's Exhibiting?",
  description:
    'See the confirmed Australian employers, migration agents and relocation specialists exhibiting at The Relocation Expo 2026, Croke Park, Dublin.',
  alternates: { canonical: '/exhibitors' },
};

export default function ExhibitorsPage() {
  const headlineSponsors = sponsorsByTier['Sponsor'];
  const exhibitors = sponsors.filter((s) => s.tier !== 'Sponsor');

  return (
    <>
      <Section className="pt-32 md:pt-40 pb-12" background="navy">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full mb-5">
                Who&apos;s Exhibiting?
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-black text-off-white mb-5 leading-[1.05]">
                The companies <span className="text-accent-yellow">already on board</span>.
              </h1>
              <p className="text-lg text-off-white/75">
                These confirmed Australian employers, migration specialists and relocation partners will be at Croke Park on 27 September 2026. New names announced weekly.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Headline Sponsors */}
      {headlineSponsors.length > 0 && (
        <Section background="dark" className="py-14">
          <Container>
            <Reveal className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-black text-accent-yellow mb-1">
                Headline Sponsors
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {headlineSponsors.map((s) => (
                <Reveal key={s.id}>
                  <ExhibitorCard sponsor={s} isSponsor />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* All other exhibitors - flat grid */}
      {exhibitors.length > 0 && (
        <Section background="navy" className="py-14">
          <Container>
            <Reveal className="mb-8">
              <h2 className="font-display text-3xl md:text-4xl font-black text-off-white mb-1">
                Exhibitors
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {exhibitors.map((s) => (
                <Reveal key={s.id}>
                  <ExhibitorCard sponsor={s} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section background="dark" className="py-20">
        <Container size="md">
          <div className="bg-gradient-to-br from-accent-yellow/[0.08] to-transparent border border-accent-yellow/30 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-black text-off-white mb-3">
              Want to join them?
            </h2>
            <p className="text-off-white/75 max-w-xl mx-auto mb-8">
              We&apos;re still confirming exhibitors across mining, healthcare, trades, IT and education. Limited booth space remains.
            </p>
            <Button href="/exhibit" size="lg">
              Why Exhibit?
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

function ExhibitorCard({ sponsor, isSponsor }: { sponsor: Sponsor; isSponsor?: boolean }) {
  const card = (
    <div className={`group h-full bg-off-white/[0.04] border border-blue-grey/30 hover:border-accent-yellow/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-off-white/[0.06] ${isSponsor ? 'border-t-4 border-t-accent-yellow' : ''}`}>
      <div
        className={`relative h-32 md:h-36 mb-5 rounded-lg flex items-center justify-center ${
          sponsor.hasBackground ? 'bg-white p-3' : ''
        }`}
      >
        <Image
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          fill
          className="object-contain p-2"
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          unoptimized={sponsor.logo.endsWith('.svg')}
        />
      </div>
      <div className="flex items-start justify-between gap-3 mb-1">
        <h3 className="text-off-white font-bold text-lg leading-tight">
          {sponsor.name}
        </h3>
        {sponsor.website && (
          <ExternalLink className="w-4 h-4 text-off-white/40 group-hover:text-accent-yellow transition-colors flex-shrink-0 mt-1" />
        )}
      </div>
      {sponsor.industry && (
        <p className="text-off-white/55 text-xs uppercase tracking-widest mb-2">
          {sponsor.industry}
        </p>
      )}
      {sponsor.website && (
        <span className="flex items-center gap-1 text-accent-yellow/70 group-hover:text-accent-yellow text-[11px] font-semibold uppercase tracking-widest transition-colors mt-2">
          View More <ExternalLink className="w-3 h-3" />
        </span>
      )}
    </div>
  );

  if (sponsor.website) {
    return (
      <a
        href={sponsor.website}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${sponsor.name} - visit website`}
      >
        {card}
      </a>
    );
  }
  return card;
}
