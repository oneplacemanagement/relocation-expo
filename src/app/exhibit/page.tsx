import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { eventData } from '@/data/event';
import { sponsors } from '@/data/sponsors';
import { ExhibitEnquiryForm } from '@/components/exhibit/ExhibitEnquiryForm';
import { ExhibitPdfForm } from '@/components/exhibit/ExhibitPdfForm';
import {
  Users2,
  Award,
  Layers3,
  HeartHandshake,
  CheckCircle2,
  TrendingUp,
  Eye,
  MapPin,
  Briefcase,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Exhibit',
  description:
    "Connect with hundreds of professionals ready to relocate to Australia at Ireland's first one-stop relocation event — Croke Park, 27 September 2026.",
  alternates: { canonical: '/exhibit' },
};

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
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full">
                  Why Exhibit?
                </div>
                <div className="inline-flex items-center gap-1.5 bg-red-500/15 text-red-400 text-xs font-bold px-3 py-1.5 rounded-full animate-pulse">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                  Limited Stands Remaining
                </div>
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-off-white mb-6 leading-[1.02]">
                Connect With Hundreds{' '}
                <span className="text-accent-yellow">Ready to Relocate.</span>
              </h1>
              <p className="text-lg md:text-xl text-off-white/80 mb-4 leading-relaxed">
                <span className="text-accent-yellow font-semibold">
                  Ireland&apos;s first one-stop relocation event.
                </span>
              </p>
              <p className="text-base md:text-lg text-off-white/75 mb-8 leading-relaxed">
                The Relocation Expo brings together talent ready to move, Australian employers hungry for skills, and industry experts who make relocation seamless. Real conversations. Real connections. Real hiring pipelines.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button href="#enquiry" size="lg">
                  Request Exhibitor Pack
                </Button>
                <Button href="#packages" variant="outline" size="lg">
                  See Packages
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Hogan Suite_files/3b6fb3ff32354b49a765d16449bbf5fd_LARGE!_!01d4ec79d4a2daf958d2ef47a34d9548(1).jpeg"
                  alt="Hogan Suite at Croke Park - exhibitor space"
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

      {/* SOCIAL PROOF STATS */}
      <Section background="dark" className="py-10 md:py-12 border-y border-blue-grey/20">
        <Container>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <StatCard
                icon={<Eye className="w-5 h-5" />}
                value="630K+"
                label="TikTok Views"
                sub="on relocation content"
              />
              <StatCard
                icon={<Users2 className="w-5 h-5" />}
                value="Hundreds"
                label="Registered"
                sub="and growing weekly"
              />
              <StatCard
                icon={<TrendingUp className="w-5 h-5" />}
                value="1 Day"
                label="At Croke Park"
                sub="27 September 2026"
              />
              <StatCard
                icon={<MapPin className="w-5 h-5" />}
                value="4 Suites"
                label="Exhibitor Space"
                sub="limited stands remain"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* TIKTOK SOCIAL PROOF */}
      <Section background="navy" className="py-16 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-4">
                Social Proof
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-off-white mb-4 leading-tight">
                <span className="text-accent-yellow">630,000+ views</span> on relocation content and counting.
              </h2>
              <p className="text-off-white/75 text-base md:text-lg leading-relaxed mb-6">
                Our audience is actively consuming Australian relocation content. This isn&apos;t cold outreach — these are people deep in the decision process, researching visas, jobs, and logistics right now.
              </p>
              <ul className="space-y-3 text-off-white/80 text-sm">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                  <span>Organic reach across TikTok with real relocation stories</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                  <span>Highly engaged audience — 80%+ watch-through rates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent-yellow flex-shrink-0 mt-0.5" />
                  <span>Comments filled with people asking &quot;how do I get started?&quot;</span>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex justify-center">
                <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-blue-grey/30">
                  <iframe
                    src="https://www.tiktok.com/embed/v2/7626386051665284360"
                    className="w-full h-full"
                    allowFullScreen
                    allow="encrypted-media"
                    title="TikTok relocation content"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* WHO'S ATTENDING — ATTENDEE PERSONA */}
      <Section background="dark" className="py-16 md:py-20">
        <Container>
          <Reveal className="text-center mb-12">
            <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-4">
              Your Audience
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-off-white mb-4 leading-tight">
              Who&apos;s in the room on the day?
            </h2>
            <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
              Qualified candidates who are actively exploring relocation to Australia — not casual browsers.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Reveal delay={0}>
              <PersonaCard
                icon={<Briefcase className="w-6 h-6" />}
                title="Skilled Professionals"
                points={[
                  'Trades & Construction',
                  'Healthcare & Nursing',
                  'Engineering & Mining',
                  'IT & Technology',
                  'Education',
                ]}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <PersonaCard
                icon={<TrendingUp className="w-6 h-6" />}
                title="High Intent"
                points={[
                  'Actively researching relocation',
                  'Ready to speak with employers',
                  'Visa-eligible or visa-aware',
                  'Decision-makers (individuals & families)',
                  'Timeline: next 6–18 months',
                ]}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <PersonaCard
                icon={<MapPin className="w-6 h-6" />}
                title="Location"
                points={[
                  'Local and international attendees',
                  'Professionals ready to relocate',
                  'Returning Australians',
                  'Dual citizens and PR holders',
                  'Partners & families relocating together',
                ]}
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* WHO'S ALREADY EXHIBITING */}
      <Section background="navy" className="py-16 md:py-20">
        <Container>
          <Reveal className="text-center mb-10">
            <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-4">
              Confirmed Exhibitors
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black text-off-white mb-4 leading-tight">
              Who&apos;s already exhibiting?
            </h2>
            <p className="text-lg text-off-white/70 max-w-2xl mx-auto">
              Join these industry leaders at Croke Park.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 max-w-5xl mx-auto">
            {sponsors.map((s) => (
              <Reveal key={s.id} delay={0.02}>
                <div className="bg-white rounded-xl p-4 flex items-center justify-center h-24 md:h-28">
                  <Image
                    src={s.logo}
                    alt={`${s.name} logo`}
                    width={160}
                    height={80}
                    className="object-contain max-h-16 md:max-h-20 w-auto"
                    unoptimized={s.logo.endsWith('.svg')}
                  />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-8">
            <p className="text-off-white/50 text-sm">
              More exhibitors being confirmed weekly.{' '}
              <a href="#enquiry" className="text-accent-yellow underline hover:no-underline">
                Secure your stand →
              </a>
            </p>
          </Reveal>
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
                    href="#enquiry"
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

      {/* GATED PDF DOWNLOAD */}
      <Section background="dark" className="py-14 md:py-16">
        <Container size="md">
          <Reveal>
            <div className="bg-off-white/[0.03] border border-blue-grey/30 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-display text-xl md:text-2xl font-bold text-off-white mb-2">
                    Download the Exhibitor Pack
                  </h3>
                  <p className="text-off-white/65 text-sm">
                    Get the full PDF with pricing, booth specs, floorplan, and attendee projections delivered to your inbox.
                  </p>
                </div>
                <div className="flex-1">
                  <ExhibitPdfForm />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ENQUIRY FORM */}
      <Section id="enquiry" background="navy" className="py-16 md:py-20">
        <Container size="md">
          <Reveal>
            <div className="text-center mb-10">
              <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full mb-4">
                Get In Touch
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-off-white mb-3">
                Secure Your Stand
              </h2>
              <p className="text-off-white/70 max-w-xl mx-auto">
                Fill in your details and we&apos;ll send you the full exhibitor pack with pricing, booth specs, and projected attendee data within 24 hours.
              </p>
            </div>
            <div className="bg-off-white/[0.03] border border-blue-grey/30 rounded-2xl p-6 md:p-10">
              <ExhibitEnquiryForm />
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function StatCard({
  icon,
  value,
  label,
  sub,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-accent-yellow/15 flex items-center justify-center text-accent-yellow mb-2">
        {icon}
      </div>
      <div className="font-display font-black text-2xl md:text-3xl text-accent-yellow leading-none">
        {value}
      </div>
      <div className="text-off-white/80 text-sm font-semibold mt-1">{label}</div>
      <div className="text-off-white/50 text-xs mt-0.5">{sub}</div>
    </div>
  );
}

function PersonaCard({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <div className="h-full bg-off-white/[0.03] border border-blue-grey/30 rounded-2xl p-6">
      <div className="w-12 h-12 rounded-xl bg-accent-yellow/15 border border-accent-yellow/30 flex items-center justify-center text-accent-yellow mb-4">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold text-off-white mb-3">{title}</h3>
      <ul className="space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-off-white/70 text-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent-yellow flex-shrink-0 mt-0.5" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
