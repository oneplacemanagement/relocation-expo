'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { eventData } from '@/data/event';

/**
 * Cinematic "Discover Croke Park" section.
 * - When `eventData.crokeParkVideoId` is set (a YouTube video ID), it shows a
 *   click-to-play poster card, then loads the iframe on click (no autoplay
 *   bandwidth cost).
 * - When unset, it shows a beautiful still gallery hint instead - site
 *   stays cinematic with no broken embed.
 *
 * To enable: set `crokeParkVideoId: 'XXXXXXXXXXX'` in src/data/event.ts.
 */
export function CrokeParkVideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoId = eventData.crokeParkVideoId;

  return (
    <Section background="dark" className="relative overflow-hidden">
      {/* Background photo for the section itself */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Field View.jpg"
          alt=""
          fill
          aria-hidden="true"
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/90 to-navy" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-block bg-accent-yellow/15 text-accent-yellow text-xs uppercase tracking-[0.18em] font-bold px-4 py-1.5 rounded-full mb-5">
              The Venue
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-off-white mb-6 leading-[1.05]">
              Held at <span className="text-accent-yellow">Ireland&apos;s Most&nbsp;Iconic</span> Venue.
            </h2>
            <p className="text-lg text-off-white/80 leading-relaxed mb-6">
              Croke Park isn&apos;t just a venue - it&apos;s a statement. Ireland&apos;s largest conference centre, fully accessible, served by DART, LUAS and Dublin Bus, with on-site parking and the kind of hospitality you&apos;d expect for an event of this scale.
            </p>
            <ul className="space-y-3 text-off-white/85">
              {[
                'Wheelchair-accessible across all suites',
                'On-site parking + DART, LUAS, Dublin Bus',
                'Hogan Suite and Mezzanine, Davin Suite and Nally Suite',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-accent-yellow flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-blue-grey/30 group">
              {videoId && playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Croke Park aerial tour"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => videoId && setPlaying(true)}
                  disabled={!videoId}
                  aria-label={
                    videoId
                      ? 'Play Croke Park aerial tour video'
                      : 'Croke Park venue gallery'
                  }
                  className="absolute inset-0 group/btn"
                >
                  <Image
                    src="/images/Hogan Mezzanine_files/7a31f77844a244f0ab9770bce2556ab3_LARGE!_!8409e51bf6888e13cc1e803159910837.jpeg"
                    alt="Croke Park Hogan Mezzanine - venue for The Relocation Expo 2026"
                    fill
                    className="object-cover transition-transform duration-700 group-hover/btn:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                  {videoId && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent-yellow/95 flex items-center justify-center shadow-2xl group-hover/btn:scale-110 transition-transform">
                        <svg
                          className="w-10 h-10 text-navy ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-5 left-5 right-5 text-left">
                    <div className="text-accent-yellow text-[11px] font-bold uppercase tracking-widest mb-1">
                      {videoId ? 'Aerial Tour' : 'The Setting'}
                    </div>
                    <p className="text-off-white font-display text-xl md:text-2xl font-bold">
                      Croke Park · Dublin
                    </p>
                  </div>
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
