'use client';

import Image from 'next/image';
import { sponsors } from '@/data/sponsors';

/**
 * Auto-scrolling logo marquee. The list is duplicated so the loop is seamless.
 * Sits just below the hero as a "trust strip" — instantly signals "this is real."
 *
 * Logos that are wordmark-less (mark-only, e.g. Cailin) get a small caption
 * rendered alongside so visitors can read the company name as it scrolls past.
 */
export function SponsorsMarquee() {
  const loop = [...sponsors, ...sponsors];
  return (
    <section
      aria-label="Exhibitors"
      className="relative bg-navy-deep border-y border-blue-grey/20 py-9 overflow-hidden"
    >
      <div className="text-center mb-7">
        <p className="text-xs uppercase tracking-[0.22em] text-accent-yellow font-bold">
          Confirmed Exhibitors
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-deep to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-deep to-transparent z-10" />

        <div className="flex w-max gap-10 animate-marquee-slow hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <div
              key={`${s.id}-${i}`}
              className="flex items-center justify-center gap-3"
              title={s.name}
            >
              <div
                className={`relative flex items-center justify-center flex-shrink-0 w-[180px] h-[80px] md:w-[220px] md:h-[96px] rounded-xl ${
                  s.hasBackground
                    ? 'bg-white'
                    : 'bg-transparent'
                }`}
              >
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={240}
                  height={120}
                  className="object-contain max-h-16 md:max-h-20 max-w-[160px] md:max-w-[200px]"
                  unoptimized={s.logo.endsWith('.svg')}
                />
              </div>
              {s.markOnly && (
                <span className="text-off-white/85 text-sm md:text-base font-semibold whitespace-nowrap">
                  {s.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
