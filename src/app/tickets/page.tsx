import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { PricingTiersSection } from '@/components/home/PricingTiersSection';
import { CountdownTimer } from '@/components/CountdownTimer';
import { CheckoutEmbed } from '@/components/CheckoutEmbed';
import { SkylineDayOut } from '@/components/SkylineDayOut';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buy Tickets',
  description:
    'Single €15, Couple €25, Family €35. Buy your tickets for The Relocation Expo 2026 at Croke Park, Dublin. Limited availability.',
  alternates: { canonical: '/tickets' },
};

export default function TicketsPage() {
  return (
    <>
      {/* Hero band */}
      <Section className="pt-32 md:pt-40 pb-10" background="navy">
        <Container size="md">
          <div className="text-center">
            <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full mb-5">
              Buy Tickets
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-black text-off-white mb-5 leading-[1.05]">
              Secure your seat at <span className="text-accent-yellow">Croke Park</span>.
            </h1>
            <p className="text-lg text-off-white/75 max-w-2xl mx-auto mb-8">
              Sunday 27th September 2026 · Croke Park, Dublin. Three ticket types - pick the one that fits.
            </p>
            <div className="max-w-2xl mx-auto">
              <CountdownTimer />
            </div>
          </div>
        </Container>
      </Section>

      {/* Tier cards (anchor target #tickets) */}
      <PricingTiersSection />

      {/* Embedded Wix checkout - anchor target #secure-checkout */}
      <Section background="navy" className="py-14 md:py-16">
        <Container size="md">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-off-white mb-3">
              Secure Checkout
            </h2>
            <p className="text-off-white/65">
              Tickets are issued by our official partner. SSL-encrypted, instant ticket email.
            </p>
          </div>
          <CheckoutEmbed />
        </Container>
      </Section>

      {/* Skyline cross-sell - compact */}
      <Section background="dark" className="py-12 md:py-14">
        <Container size="md">
          <SkylineDayOut variant="compact" />
        </Container>
      </Section>

      {/* Walk-in note */}
      <Section background="dark" className="py-12">
        <Container size="md">
          <div className="bg-off-white/[0.04] border border-blue-grey/30 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-accent-yellow mb-2">
              Can&apos;t buy online?
            </h3>
            <p className="text-off-white/70 text-sm md:text-base">
              Walk-in tickets are limited on the day at the door (cash only, subject to availability) - and priced higher than online. We strongly recommend buying online to save money, guarantee your spot and skip the queue.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
