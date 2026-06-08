'use client';

import Image from 'next/image';
import { sponsors } from '@/data/sponsors';

/**
 * Auto-scrolling logo marquee. The list is duplicated so the loop is seamless.
 * Sits just below the hero as a "trust strip" - instantly signals "this is real."
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
              className="flex items-center justify-center"
              title={s.name}
            >
              <div
                className={`flex items-center justify-center flex-shrink-0 w-[180px] h-[80px] md:w-[220px] md:h-[96px] rounded-xl overflow-hidden ${
                  s.hasBackground ? 'bg-white' : 'bg-transparent'
                } ${s.markOnly ? 'gap-2 px-3' : ''}`}
              >
                {s.markOnly ? (
                  <>
                    <Image
                      src={s.logo}
                      alt={`${s.name} logo`}
                      width={60}
                      height={60}
                      className="object-contain h-[50px] md:h-[60px] w-auto flex-shrink-0"
                      unoptimized={s.logo.endsWith('.svg')}
                    />
                    <span className="text-navy font-bold text-xs md:text-sm leading-tight text-center">
                      Cailin Mining<br />&amp;<br />Civil
                    </span>
                  </>
                ) : (
                  <Image
                    src={s.logo}
                    alt={`${s.name} logo`}
                    width={240}
                    height={120}
                    className={`object-contain ${
                      s.logoScale
                        ? 'max-h-[72px] md:max-h-[88px] max-w-[170px] md:max-w-[210px]'
                        : 'max-h-16 md:max-h-20 max-w-[160px] md:max-w-[200px]'
                    }`}
                    unoptimized={s.logo.endsWith('.svg')}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
