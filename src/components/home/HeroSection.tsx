'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { CountdownTimer } from '@/components/CountdownTimer';
import { CountUp } from '@/components/ui/CountUp';
import { eventData } from '@/data/event';

const HERO_POSTER =
  '/images/Hogan Mezzanine_files/7a31f77844a244f0ab9770bce2556ab3_LARGE!_!8409e51bf6888e13cc1e803159910837.jpeg';

const VIDEO_ID = 'h4efEirg29w';
const VIDEO_SRC =
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
  `&controls=0&modestbranding=1&rel=0&showinfo=0` +
  `&iv_load_policy=3&playsinline=1&disablekb=1&enablejsapi=1&fs=0`;

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const reduceData = window.matchMedia('(prefers-reduced-data: reduce)')
      .matches;
    if (reduceMotion || reduceData) return;
    const isNarrow = window.innerWidth < 640;
    const t = window.setTimeout(() => setShowVideo(true), isNarrow ? 600 : 100);
    return () => window.clearTimeout(t);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const sendCmd = (func: 'unMute' | 'mute' | 'setVolume', args?: unknown[]) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args: args ?? [] }),
      '*',
    );
  };

  const toggleMute = () => {
    if (muted) {
      sendCmd('unMute');
      sendCmd('setVolume', [80]);
    } else {
      sendCmd('mute');
    }
    setMuted((m) => !m);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28 min-h-[100svh] flex items-center"
    >
      {/* ─── Background layer ──────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0 will-change-transform"
        style={{ y: imgY }}
        aria-hidden="true"
      >
        {/* Video layer sits behind the poster — revealed as poster fades.
            Over-scaled 140 % in each axis so YouTube's title, watermark
            and pause/skip chrome all fall outside the visible crop. */}
        {showVideo && (
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              ref={iframeRef}
              src={VIDEO_SRC}
              title="Croke Park aerial footage"
              allow="autoplay; encrypted-media; picture-in-picture"
              loading="eager"
              tabIndex={-1}
              onLoad={() => {
                window.setTimeout(() => setVideoReady(true), 800);
              }}
              className="absolute pointer-events-none border-0"
              style={{
                top: '50%',
                left: '50%',
                width: 'max(140vw, 250vh)',
                height: 'max(78.75vw, 140vh)',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        )}

        {/* Poster — fades + scales down once video is confirmed playing,
            creating the "phase-out / narrowing" reveal the user requested. */}
        <div
          className="absolute inset-0 transition-all duration-[2500ms] ease-[cubic-bezier(0.4,0,0.2,1)] origin-center"
          style={{
            opacity: videoReady ? 0 : 1,
            transform: videoReady ? 'scale(0.92)' : 'scale(1)',
          }}
        >
          <div className="absolute inset-0 animate-ken-burns">
            <Image
              src={HERO_POSTER}
              alt=""
              fill
              priority
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Layered overlays for depth + readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/75 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-navy/50" />
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent-yellow/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-grey/30 rounded-full blur-3xl" />
      </motion.div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          color: '#EFEFF0',
        }}
      />

      {/* ─── Foreground content ──────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full"
        style={{ y: contentY, opacity }}
      >
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 bg-off-white/10 backdrop-blur-sm border border-accent-yellow/30 text-accent-yellow text-xs md:text-sm uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full mb-6"
            >
              <span className="w-1.5 h-1.5 bg-accent-yellow rounded-full animate-pulse" />
              {eventData.date} · Croke Park, Dublin
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-off-white mb-5 leading-[0.95] tracking-tight"
            >
              Moving to Australia?
              <br />
              <span className="bg-gradient-to-r from-accent-yellow via-accent-yellow-glow to-accent-yellow bg-clip-text text-transparent">
                Start at Croke Park.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-lg md:text-2xl text-off-white/85 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Australia&apos;s leading employers, registered migration agents, and relocation specialists — all under one roof, for one unforgettable day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
            >
              <a
                href={eventData.tickets.single.href}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent-yellow to-accent-yellow-glow hover:to-accent-yellow text-navy font-bold text-base md:text-lg px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Buy Tickets — From €15
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <Link
                href="/exhibit"
                className="group inline-flex items-center justify-center gap-2 border-2 border-off-white/30 hover:border-accent-yellow text-off-white hover:text-accent-yellow font-semibold text-base md:text-lg px-8 py-4 rounded-xl backdrop-blur-sm bg-off-white/5 hover:bg-off-white/10 transition-all duration-300"
              >
                Why Exhibit?
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="grid grid-cols-2 gap-3 md:gap-6 max-w-md mx-auto mb-12"
            >
              <Stat value={1} label="Day Only" />
              <Stat prefix="€" value={15} label="From" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="max-w-3xl mx-auto"
            >
              <CountdownTimer />
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* ─── Mute / Unmute toggle (only when video is actually playing) ──── */}
      {showVideo && videoReady && (
        <button
          type="button"
          onClick={toggleMute}
          className="group absolute z-20 bottom-5 right-5 md:bottom-8 md:right-8 inline-flex items-center gap-2 bg-navy/70 hover:bg-navy/90 backdrop-blur-md border border-off-white/20 hover:border-accent-yellow/60 text-off-white text-xs md:text-sm font-semibold px-3.5 py-2 rounded-full transition-all"
          aria-label={muted ? 'Unmute background video' : 'Mute background video'}
        >
          {muted ? (
            <VolumeX className="w-4 h-4 text-accent-yellow" />
          ) : (
            <Volume2 className="w-4 h-4 text-accent-yellow" />
          )}
          <span className="hidden sm:inline">{muted ? 'Sound on' : 'Sound off'}</span>
        </button>
      )}

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-off-white/50">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent-yellow to-transparent"
        />
      </div>
    </section>
  );
}

function Stat({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="bg-off-white/5 backdrop-blur-sm border border-blue-grey/30 rounded-xl p-3 md:p-5">
      <div className="font-display font-black text-3xl md:text-5xl text-accent-yellow leading-none tabular-nums">
        <CountUp to={value} prefix={prefix} suffix={suffix} />
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-off-white/60 mt-1.5">
        {label}
      </div>
    </div>
  );
}
