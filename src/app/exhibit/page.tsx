import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CountUp } from '@/components/ui/CountUp';
import { Button } from '@/components/ui/Button';
import { eventData } from '@/data/event';
import {
  Users2,
  Award,
  Layers3,
  HeartHandshake,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Exhibit',
  description:
    "Real People. Real Stories. Real Opportunities. Reach Irish & UK talent ready to relocate to Australia at Ireland's first one-stop relocation event — Croke Park, 27 September 2026.",
  alternates: { canonical: '/exhibit' },
};

/** PDF — "Why Exhibit?" reasons, verbatim. */
const reasons = [
  {
    icon: Users2,
    title: 'Meet Talent Ready to Relocate',
    body: 'Skilled professionals actively exploring opportunities in Australia.',
  },
  {
    icon: Award,
    title: 'Showcase Your Brand',
    body: 'Position your organisation as a trusted employer of choice.',
  },
  {
    icon: Layers3,
    title: 'One Powerful Hiring Pipeline',
    body: 'Healthcare to trades, engineering to tech — broad motivated audience.',
  },
  {
    icon: HeartHandshake,
    title: 'Real Stories. Real Impact.',
    body: 'Genuine relocation journeys give your brand authenticity.',
  },
];

/**
 * PDF — "Choose Your Package" tier inclusions.
 * Order is intentionally TOP-DOWN per the PDF hierarchy (highest impact first).
 * No pricing displayed on the public site — pricing only on enquiry.
 */
const packages = [
  {
    id: 'sponsor',
    name: 'Sponsor',
    tagline: 'Maximum Impact',
    blurb: 'Headline partner — main stage, corner booth, branded everywhere.',
    perks: [
      'Corner Booth — two open sides',
      'Main Stage speaking slot',
      'Social media brand promotion',
      'Industry-Relevant Partner title across branding, screens & social channels',
      'GDPR-compliant attendee data',
      'B2B Networking Access (×4)',
    ],
    featured: true,
  },
  {
    id: 'platinum',
    name: 'Platinum',
    tagline: 'Prime Location',
    blurb: 'Shell-scheme booth in the highest-traffic walking zone.',
    perks: [
      'Shell Scheme Booth in prime high-traffic location',
      'Dedicated B2C meeting area',
      '4 exhibitor passes',
      'Logo on event signage',
      'Inclusion in "Meet the Exhibitors" email campaign',
      'Logo on website & social media',
      'B2B Networking Access (×2)',
    ],
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Stand Included',
    blurb: 'Dressed trestle stand in the main exhibitor hall.',
    perks: [
      'Dressed trestle table & chairs',
      '2 exhibitor passes',
      'Logo on Expo website & social channels',
      'Inclusion in "Meet the Exhibitors" email campaign',
      'Wi-Fi & power supply included',
      'B2B Networking Passes available for purchase',
    ],
  },
  {
    id: 'digital',
    name: 'Digital',
    tagline: 'Online Exposure',
    blurb: 'No physical presence — featured across digital channels only.',
    perks: [
      'No physical presence needed',
      'Logo on Expo website',
      'Logo on digital event screens',
      'QR code to your website',
      'QR code to your job vacancies',
      'Listed in attendee digital guide',
      'Included in exhibitor email campaign to registered guests',
    ],
  },
];

export default function ExhibitPage() {
  const partnerMail = `mailto:${eventData.partnerEmail}?subject=Exhibitor%20Package%20Enquiry`;

  return (
    <>
      {/* HERO */}
      <Section className="pt-32 md:pt-40 pb-12" background="navy">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full mb-6">
                Why Exhibit?
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-off-white mb-6 leading-[1.02]">
                Real People.
                <br />
                Real Stories.
                <br />
                <span className="text-accent-yellow">Real Opportunities.</span>
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 mb-4 leading-relaxed">
                <span className="text-accent-yellow font-semibold">
                  Ireland&apos;s first one-stop relocation event.
                </span>
              </p>
              <p className="text-base md:text-lg text-off-white/75 mb-8 leading-relaxed">
                The Relocation Expo brings together Irish and UK talent ready to move, Australian employers hungry for skills, and industry experts who make relocation seamless. Real conversations. Real connections. Real hiring pipelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button href={partnerMail} size="lg">
                  Request Exhibitor Pack
                </Button>
                <Button href="#packages" variant="outline" size="lg">
                  See Packages
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-3 max-w-md">
                <Stat value={6} suffix="+" label="Industries" />
                <Stat value={4} label="Suites" />
                <Stat value={1} label="Day" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Cusack Suite_files/154e82724ae04cbeabecea3a6ad660a1_LARGE!_!5e2be352b35c4fefb22cc5998309d3ee.jpeg"
                  alt="Exhibitor suite at Croke Park"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-navy/80 backdrop-blur-md rounded-2xl border border-accent-yellow/30 p-5">
                    <div className="text-accent-yellow text-[11px] font-bold uppercase tracking-widest mb-1">
                      Exhibitor Suites
                    </div>
                    <p className="text-off-white font-display text-xl font-bold">
                      Hogan Suite and Mezzanine, Davin Suite and Nally Suite
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* WHY EXHIBIT — PDF reasons */}
      <Section background="dark" className="relative">
        <Container>
          <Reveal className="text-center mb-12">
            <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-4">
              Why Exhibit?
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-off-white mb-4 leading-tight">
              Four reasons Australia&apos;s top employers <span className="text-accent-yellow">choose this Expo.</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title} delay={i * 0.05}>
                  <div className="h-full bg-off-white/[0.03] border border-blue-grey/30 hover:border-accent-yellow/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-xl bg-accent-yellow/15 border border-accent-yellow/30 flex items-center justify-center text-accent-yellow mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-off-white mb-2.5 leading-tight">
                      {r.title}
                    </h3>
                    <p className="text-off-white/70 text-sm leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* PACKAGES — PDF perks, no pricing */}
      <Section id="packages" background="navy">
        <Container>
          <Reveal className="text-center mb-12">
            <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full mb-5">
              Choose Your Package
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-off-white mb-4">
              Four ways to be part of the day.
            </h2>
            <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
              Pricing is allocated on a first-come basis and shared on enquiry. Limited stands — particularly in prime locations — remain.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {packages.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <div
                  className={`h-full flex flex-col rounded-2xl p-6 transition-all duration-300 ${
                    p.featured
                      ? 'bg-gradient-to-br from-accent-yellow/[0.1] via-navy/80 to-navy/80 border-2 border-accent-yellow shadow-[0_30px_60px_-20px_rgba(239,197,68,0.35)]'
                      : 'bg-off-white/[0.03] border border-blue-grey/30 hover:border-accent-yellow/40'
                  }`}
                >
                  {p.featured && (
                    <div className="inline-flex self-start bg-accent-yellow text-navy text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                      Maximum Impact
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-bold text-off-white mb-1">
                    {p.name}
                  </h3>
                  <p className="text-accent-yellow text-xs font-bold uppercase tracking-widest mb-2">
                    {p.tagline}
                  </p>
                  <p className="text-off-white/70 text-sm leading-relaxed mb-5">
                    {p.blurb}
                  </p>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {p.perks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-2.5 text-off-white/85 text-sm leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${partnerMail}%20-%20${p.name}`}
                    className={`text-center text-sm font-bold rounded-xl px-4 py-3 transition-all ${
                      p.featured
                        ? 'bg-gradient-to-r from-accent-yellow to-accent-yellow-glow text-navy hover:scale-[1.02]'
                        : 'border border-accent-yellow/50 text-accent-yellow hover:bg-accent-yellow hover:text-navy'
                    }`}
                  >
                    Enquire about {p.name}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-10">
            <p className="text-off-white/45 text-xs">
              All packages include access to venue suites at Croke Park, Wi-Fi, power, and event-day staffing. Ask us for the full pack including pricing.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* CONTACT CTA */}
      <Section background="dark" className="py-20">
        <Container size="md">
          <Reveal>
            <div className="bg-gradient-to-br from-accent-yellow/[0.08] to-transparent border border-accent-yellow/30 rounded-3xl p-8 md:p-12 text-center">
              <Mail className="w-12 h-12 text-accent-yellow mx-auto mb-5" />
              <h2 className="font-display text-3xl md:text-4xl font-black text-off-white mb-3">
                Get the full Exhibitor Pack
              </h2>
              <p className="text-off-white/75 max-w-xl mx-auto mb-8">
                Pricing, booth specs, attendee profile and projected reach — everything you need to make the call. We respond within 24 hours.
              </p>
              <Button href={partnerMail} size="lg">
                Email partner@therelocationexpo.com
              </Button>
              <p className="text-off-white/45 text-xs mt-5">
                Or get in touch via{' '}
                <a
                  href="/contact"
                  className="text-accent-yellow underline hover:no-underline"
                >
                  the contact form
                </a>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function Stat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <div className="font-display font-black text-3xl md:text-4xl text-accent-yellow leading-none tabular-nums">
        <CountUp to={value} suffix={suffix} />
      </div>
      <div className="text-off-white/55 text-[11px] uppercase tracking-widest mt-1">
        {label}
      </div>
    </div>
  );
}
