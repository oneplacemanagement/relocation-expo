'use client';

import { eventData } from '@/data/event';

export function CountdownTimer() {
  return (
    <div className="bg-navy/60 backdrop-blur-md border-2 border-accent-yellow/30 rounded-2xl p-6 md:p-8 shadow-2xl text-center">
      <p className="text-accent-yellow font-bold uppercase tracking-widest text-xs mb-2">
        Tickets On Sale Now
      </p>
      <p className="text-off-white/80 mb-5">
        Secure your spot — limited availability.
      </p>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-off-white/70 text-sm mb-5">
        <Tick>Single from €15</Tick>
        <Tick>Couple €25</Tick>
        <Tick>Family Pass €35</Tick>
      </div>
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
        Buy Tickets
      </a>
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
