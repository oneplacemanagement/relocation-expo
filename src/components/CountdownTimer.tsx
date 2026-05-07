'use client';

import { useEffect, useState } from 'react';
import { eventData } from '@/data/event';

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getParts(target: Date): Parts {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds, expired: false };
}

export function CountdownTimer() {
  const target = new Date(eventData.earlyBirdEndsISO);
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(getParts(target));
    const t = setInterval(() => setParts(getParts(target)), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // SSR-safe: render skeleton on the server
  if (!parts) {
    return <CountdownSkeleton />;
  }

  if (parts.expired) {
    return (
      <div className="bg-navy/60 backdrop-blur-md border-2 border-accent-yellow/30 rounded-2xl p-6 md:p-8 shadow-2xl text-center">
        <p className="text-accent-yellow font-bold uppercase tracking-widest text-xs mb-2">
          Standard Pricing Now Live
        </p>
        <p className="text-off-white/80">
          Early-bird has ended — secure your seat at the standard rate.
        </p>
        <a
          href={eventData.tickets.single.href}
          className="mt-5 inline-flex items-center gap-2 bg-accent-yellow hover:bg-accent-yellow-glow text-navy font-bold text-base px-7 py-3 rounded-xl shadow-lg transition-all duration-200 hover:scale-105"
        >
          Buy Tickets →
        </a>
      </div>
    );
  }

  return (
    <div className="bg-navy/60 backdrop-blur-md border-2 border-accent-yellow/30 rounded-2xl p-6 md:p-8 shadow-2xl">
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 bg-accent-yellow text-navy text-[11px] md:text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
          <span className="w-1.5 h-1.5 bg-navy rounded-full animate-pulse" />
          Early Bird ends 31 May
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-off-white">
          Save up to 40% — Early Bird closes in
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-5">
        <Cell value={parts.days} label="Days" />
        <Cell value={parts.hours} label="Hours" />
        <Cell value={parts.minutes} label="Minutes" />
        <Cell value={parts.seconds} label="Seconds" pulse />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={eventData.tickets.single.href}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-accent-yellow to-accent-yellow-glow hover:to-accent-yellow text-navy font-bold text-base md:text-lg px-7 md:px-9 py-3.5 md:py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
            />
          </svg>
          Get Early Bird Tickets
        </a>
        <a
          href="#tickets"
          className="text-off-white/80 hover:text-accent-yellow text-sm font-medium underline-offset-4 hover:underline"
        >
          See all 3 ticket types →
        </a>
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-off-white/60 text-xs md:text-sm">
        <Tick>Single from €15</Tick>
        <Tick>Couple €25</Tick>
        <Tick>Family Pass €35</Tick>
      </div>
    </div>
  );
}

function Cell({ value, label, pulse }: { value: number; label: string; pulse?: boolean }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="bg-navy-deep/70 border border-accent-yellow/20 rounded-xl p-3 md:p-4 text-center">
      <div
        className={`text-2xl md:text-4xl font-black text-accent-yellow font-display tabular-nums ${
          pulse ? 'animate-shimmer' : ''
        }`}
      >
        {padded}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-widest text-off-white/60 mt-1">
        {label}
      </div>
    </div>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-1.5">
      <svg className="w-3.5 h-3.5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      {children}
    </span>
  );
}

function CountdownSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="bg-navy/60 backdrop-blur-md border-2 border-accent-yellow/30 rounded-2xl p-6 md:p-8 shadow-2xl"
    >
      <div className="h-6 w-48 bg-blue-grey/20 rounded mx-auto mb-4" />
      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-5">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-navy-deep/70 border border-accent-yellow/10 rounded-xl" />
        ))}
      </div>
      <div className="h-12 w-56 bg-accent-yellow/30 rounded-xl mx-auto" />
    </div>
  );
}
