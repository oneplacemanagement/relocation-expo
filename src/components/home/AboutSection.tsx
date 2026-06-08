import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const POINTS = [
  {
    title: 'Real employers, real vacancies',
    body: 'Australian companies hiring right now - across mining, healthcare, trades, engineering, education, IT and more.',
  },
  {
    title: 'Registered migration experts',
    body: 'Plain-English visa advice from agents who specialise in the relocation pathway to Australia.',
  },
  {
    title: 'Real stories, no sales pitch',
    body: 'Hear from nurses, tradies, families and engineers who already made the move - what worked, what didn’t.',
  },
];

export function AboutSection() {
  return (
    <Section id="about" background="navy" className="relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Hogan Suite_files/3b6fb3ff32354b49a765d16449bbf5fd_LARGE!_!01d4ec79d4a2daf958d2ef47a34d9548(1).jpeg"
                alt="Croke Park hospitality suite - venue for The Relocation Expo 2026"
                fill
                quality={90}
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block bg-accent-yellow text-navy text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-2">
                  Confirmed Venue
                </div>
                <h3 className="text-off-white font-display text-2xl md:text-3xl font-bold leading-tight">
                  Croke Park, Dublin
                </h3>
              </div>
            </div>
            {/* Floating accent card */}
            <div className="hidden md:block absolute -bottom-6 -right-6 bg-navy-deep border border-accent-yellow/40 rounded-2xl p-5 shadow-2xl max-w-[220px]">
              <div className="text-3xl font-display font-black text-accent-yellow leading-none">
                11am-5:30pm
              </div>
              <p className="text-off-white/70 text-xs mt-2">
                Sunday 27th September 2026 · One day only
              </p>
            </div>
          </Reveal>

          {/* Copy side */}
          <div>
            <Reveal>
              <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
                About The Expo
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-off-white mb-6 leading-[1.05]">
                The whole Australia move,{' '}
                <span className="text-accent-yellow">solved in one day.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-off-white/80 leading-relaxed mb-8">
                Step into a full day of inspiration, honesty and real-world insight at Dublin&apos;s biggest event for anyone considering a new life Down Under. Meet the employers hiring, the experts advising, and the families who&apos;ve already done it.
              </p>
            </Reveal>

            <div className="space-y-5">
              {POINTS.map((p, i) => (
                <Reveal key={p.title} delay={0.15 + i * 0.05}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent-yellow/15 border border-accent-yellow/30 flex items-center justify-center">
                      <span className="text-accent-yellow font-display font-black text-lg">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-off-white font-bold text-lg mb-1">
                        {p.title}
                      </h3>
                      <p className="text-off-white/65 text-sm leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
