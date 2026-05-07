import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { CountUp } from '@/components/ui/CountUp';
import {
  Users2,
  ShieldCheck,
  Briefcase,
  Lightbulb,
  GraduationCap,
  Wallet,
  Quote,
} from 'lucide-react';

const cards = [
  {
    icon: ShieldCheck,
    title: 'Registered Migration Advice',
    body: 'Speak directly with registered Australian migration agents — clear, plain-English answers about visas, sponsorship and timelines.',
  },
  {
    icon: Briefcase,
    title: 'Real Sponsorship Pathways',
    body: 'Australian employers actively recruiting now — across mining, healthcare, civil, engineering, education, IT and more.',
  },
  {
    icon: Users2,
    title: 'Hear From People Who Did It',
    body: 'Nurses, tradies, families and engineers who already moved — what worked, what didn’t, what they wish they’d known.',
  },
  {
    icon: Lightbulb,
    title: 'Save Time, Money & Stress',
    body: 'The shortcuts, the pitfalls, the paperwork — every common mistake, demystified by people who’ve seen it all.',
  },
  {
    icon: GraduationCap,
    title: 'Education & Upskilling',
    body: 'Pathways to retrain, top-up qualifications or move into a higher-demand industry before you go.',
  },
  {
    icon: Wallet,
    title: 'Find Your Place in Australia',
    body: 'State-by-state lifestyle, salary, schools and cost-of-living deep dives — find where you actually want to live.',
  },
];

export function WhyAttendSection() {
  return (
    <Section id="why-attend" background="dark" className="relative overflow-hidden">
      {/* BG layer with soft photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Reception_files/b322465c4acd45df904fee502d435a56_LARGE!_!0236342884f5cc63be90595fa4e7e88f.jpeg"
          alt=""
          aria-hidden="true"
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy" />
      </div>

      <Container className="relative z-10">
        <Reveal className="text-center mb-12 md:mb-16">
          <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
            Why Attend
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-off-white mb-5 leading-[1.05]">
            Everything you need to <span className="text-accent-yellow">make the move</span> — in one day.
          </h2>
          <p className="text-lg md:text-xl text-off-white/70 max-w-3xl mx-auto">
            Six reasons most attendees walk out feeling clearer, calmer, and a hell of a lot closer to actually doing it.
          </p>
        </Reveal>

        {/* Stat band */}
        <Reveal>
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-14 md:mb-20">
            <StatBand value={6} suffix="+" label="Industries hiring" />
            <StatBand value={1} label="Day at Croke Park" />
            <StatBand value={4} label="Venue suites" />
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group relative h-full bg-off-white/[0.03] border border-blue-grey/30 hover:border-accent-yellow/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-off-white/[0.05]">
                  <div className="w-12 h-12 rounded-xl bg-accent-yellow/15 border border-accent-yellow/30 flex items-center justify-center text-accent-yellow mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-off-white mb-2.5 leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-off-white/70 text-sm leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Editorial quote */}
        <Reveal delay={0.15} className="mt-16 max-w-3xl mx-auto">
          <figure className="relative bg-gradient-to-br from-accent-yellow/[0.08] to-transparent border-l-4 border-accent-yellow rounded-r-2xl p-7 md:p-10">
            <Quote className="absolute -top-4 left-6 w-10 h-10 text-accent-yellow/70" />
            <blockquote className="font-display text-xl md:text-2xl text-off-white leading-snug italic">
              This isn&apos;t a generic careers fair — it&apos;s a full relocation ecosystem. Real stories. Real people. Real advice.
            </blockquote>
            <figcaption className="mt-4 text-off-white/60 text-sm uppercase tracking-widest">
              — The Relocation Expo Promise
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}

function StatBand({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="font-display font-black text-4xl md:text-6xl text-accent-yellow leading-none tabular-nums">
        <CountUp to={value} suffix={suffix} />
      </div>
      <div className="mt-2 text-off-white/60 text-xs md:text-sm uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
