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
      aria-label="Confirmed exhibitors"
      className="relative bg-navy-deep border-y border-blue-grey/20 py-9 overflow-hidden"
    >
      <div className="text-center mb-7">
        <p className="text-xs uppercase tracking-[0.22em] text-accent-yellow font-bold">
          {sponsors.length} confirmed exhibitors — and counting
        </p>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-navy-deep to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-navy-deep to-transparent z-10" />

        <div className="flex w-max gap-12 animate-marquee-slow hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <div
              key={`${s.id}-${i}`}
              className="flex items-center justify-center gap-3 h-20 md:h-24 min-w-[200px] md:min-w-[240px]"
              title={s.name}
            >
              <div
                className={`relative h-full flex items-center justify-center flex-shrink-0 ${
                  s.hasBackground
                    ? 'bg-white rounded-xl px-4 py-2'
                    : 'opacity-90 hover:opacity-100 transition-opacity'
                }`}
                style={{ width: s.markOnly ? '64px' : '100%' }}
              >
                <Image
                  src={s.logo}
                  alt={`${s.name} logo`}
                  width={220}
                  height={96}
                  className="object-contain max-h-14 md:max-h-16 w-auto"
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
