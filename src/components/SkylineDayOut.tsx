'use client';

import Image from 'next/image';
import { ExternalLink, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import { eventData } from '@/data/event';

const SKYLINE_URL = 'https://crokepark.ie/skyline';

const VIDEO_SRC = (id: string) =>
  `https://www.youtube-nocookie.com/embed/${id}` +
  `?autoplay=1&mute=1&loop=1&playlist=${id}` +
  `&controls=0&modestbranding=1&rel=0&showinfo=0` +
  `&iv_load_policy=3&playsinline=1&disablekb=1`;

interface SkylineDayOutProps {
  /**
   * `teaser` (default): subtle card with a small looping aerial video on the left,
   * intended for high-up placement on the homepage.
   * `compact`: text-only horizontal card for mid-page use (e.g. /tickets).
   */
  variant?: 'teaser' | 'compact';
}

/**
 * "Make a day of it" cross-sell to the Croke Park Skyline Tour.
 * Always presented as a *bonus* - never above our own Expo CTAs.
 */
export function SkylineDayOut({ variant = 'teaser' }: SkylineDayOutProps) {
  if (variant === 'compact') {
    return (
      <div className="bg-gradient-to-br from-navy-deep via-navy to-navy border border-blue-grey/30 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row gap-5 md:items-center">
        <div className="flex-shrink-0 inline-flex w-12 h-12 rounded-xl bg-accent-yellow/15 border border-accent-yellow/30 items-center justify-center">
          <MapPin className="w-6 h-6 text-accent-yellow" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-accent-yellow text-[11px] font-bold uppercase tracking-widest mb-1">
            Make a day of it
          </div>
          <h3 className="font-display text-xl md:text-2xl font-bold text-off-white mb-1.5 leading-tight">
            Climb 17 storeys above the pitch
          </h3>
          <p className="text-off-white/70 text-sm leading-relaxed">
            Already coming to Dublin? Add Croke Park&apos;s Skyline Tour before or after the Expo. Slots are limited - booked direct with Croke Park.
          </p>
        </div>
        <a
          href={SKYLINE_URL}
          target="_blank"
          rel="noopener nofollow"
          className="inline-flex items-center justify-center gap-2 bg-off-white/10 hover:bg-accent-yellow hover:text-navy border border-accent-yellow/50 text-accent-yellow text-sm font-bold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
        >
          Book Skyline Tour
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return <SkylineTeaser />;
}

function SkylineTeaser() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const reduceData = window.matchMedia('(prefers-reduced-data: reduce)')
      .matches;
    if (reduceMotion || reduceData) return;
    const t = window.setTimeout(() => setShowVideo(true), 400);
    return () => window.clearTimeout(t);
  }, []);

  const videoId = eventData.crokeParkVideoId;

  return (
    <section
      aria-label="Make a day of it in Dublin"
      className="bg-navy py-10 md:py-14"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-stretch bg-navy-deep/60 border border-accent-yellow/20 rounded-3xl overflow-hidden ring-1 ring-accent-yellow/[0.08]">
          {/* Looping aerial video card */}
          <div className="relative md:col-span-2 aspect-video md:aspect-auto md:min-h-[260px] overflow-hidden">
            {/* Poster fallback for slow connections / reduced motion */}
            <Image
              src="/images/Field View.jpg"
              alt="Aerial view of Croke Park"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            {showVideo && videoId && (
              <iframe
                src={VIDEO_SRC(videoId)}
                title="Croke Park aerial loop"
                allow="autoplay; encrypted-media; picture-in-picture"
                loading="lazy"
                tabIndex={-1}
                className="absolute pointer-events-none border-0"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'max(100%, 177.78%)',
                  height: 'max(56.25%, 100%)',
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-navy-deep/40 md:to-navy-deep/0" />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-navy/80 backdrop-blur-sm border border-accent-yellow/40 text-accent-yellow text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
              <MapPin className="w-3 h-3" />
              Bonus in Dublin
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-3 p-6 md:p-9 flex flex-col justify-center">
            <div className="text-accent-yellow text-[11px] font-bold uppercase tracking-widest mb-3">
              Make a day of it
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-black text-off-white mb-3 leading-tight">
              Climb <span className="text-accent-yellow">17 storeys</span> above the Croke Park pitch.
            </h2>
            <p className="text-off-white/70 leading-relaxed mb-5 text-sm md:text-base">
              In Dublin for the Expo? Time the Skyline Tour before or after - panoramic Dublin from mountains to sea, plus a head-spinning look down the pitch. Slots are limited.
            </p>
            <div>
              <a
                href={SKYLINE_URL}
                target="_blank"
                rel="noopener nofollow"
                className="group inline-flex items-center gap-2 bg-off-white/10 hover:bg-accent-yellow hover:text-navy border border-accent-yellow/50 text-accent-yellow text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                Book the Skyline Tour
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="text-off-white/35 text-[11px] mt-4">
              Booked direct with Croke Park - separate from your Expo ticket.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
