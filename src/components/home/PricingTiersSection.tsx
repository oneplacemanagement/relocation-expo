'use client';

import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { eventData } from '@/data/event';
import { Check, Star } from 'lucide-react';

const tickets = [
  { ...eventData.tickets.single, key: 'single' },
  { ...eventData.tickets.couple, key: 'couple' },
  { ...eventData.tickets.family, key: 'family' },
] as const;

export function PricingTiersSection() {
  return (
    <Section id="tickets" background="dark" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #EFC544 0%, transparent 40%), radial-gradient(circle at 80% 70%, #5C6D8C 0%, transparent 40%)',
        }}
      />
      <Container>
        <Reveal className="text-center mb-12 relative">
          <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
            Early Bird Pricing — Limited Time
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-black text-off-white mb-5 leading-[1.05]">
            One Day. <span className="text-accent-yellow">Three Ways</span> to Be There.
          </h2>
          <p className="text-lg md:text-xl text-off-white/70 max-w-2xl mx-auto">
            Pick the ticket that fits — every option includes full-day access, all stages, and migration clinics. Buy now to lock in early-bird pricing before 31 May.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tickets.map((t, i) => {
            const featured = 'featured' in t && t.featured;
            return (
              <Reveal key={t.key} delay={0.1 + i * 0.08}>
                <div
                  className={`relative h-full flex flex-col rounded-3xl p-6 md:p-8 transition-all duration-300 ${
                    featured
                      ? 'bg-gradient-to-br from-accent-yellow/[0.12] via-navy/80 to-navy/80 border-2 border-accent-yellow shadow-[0_30px_60px_-20px_rgba(239,197,68,0.4)] -translate-y-2 md:-translate-y-3 scale-[1.02]'
                      : 'bg-navy/60 border border-blue-grey/30 hover:border-accent-yellow/40 hover:-translate-y-1'
                  }`}
                >
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-accent-yellow text-navy text-[11px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      <Star className="w-3.5 h-3.5 fill-navy" />
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-off-white font-bold text-xl md:text-2xl mb-1">
                      {t.label}
                    </h3>
                    <p className="text-off-white/60 text-sm leading-relaxed">
                      {t.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <span className="font-display font-black text-5xl md:text-6xl text-accent-yellow leading-none">
                      {t.price}
                    </span>
                    <span className="text-off-white/50 text-sm ml-2">
                      {t.key === 'single' ? '/ person' : t.key === 'couple' ? '/ 2 people' : '/ family'}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {t.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-3 text-off-white/85 text-sm"
                      >
                        <Check className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={t.href}
                    className={`inline-flex items-center justify-center gap-2 w-full font-bold rounded-xl px-6 py-3.5 transition-all duration-300 ${
                      featured
                        ? 'bg-gradient-to-r from-accent-yellow to-accent-yellow-glow text-navy shadow-xl hover:shadow-2xl hover:scale-[1.02]'
                        : 'border-2 border-accent-yellow/60 text-accent-yellow hover:bg-accent-yellow hover:text-navy'
                    }`}
                  >
                    Buy {t.label}
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
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="text-center mt-10">
          <p className="text-off-white/50 text-sm">
            Secure checkout via our ticketing partner. Walk-in tickets are limited on the day (cash only, higher price, subject to availability).
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
