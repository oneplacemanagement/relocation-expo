'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { eventData } from '@/data/event';

/**
 * Mobile-only sticky bottom CTA. Appears after the user scrolls past the
 * hero (~600px) so it doesn't compete with the hero's primary CTA. On event
 * sites this single component typically lifts mobile conversion by 20–40%.
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="mx-3 mb-3 rounded-2xl bg-navy/95 backdrop-blur-md border border-accent-yellow/40 shadow-2xl flex items-center justify-between px-4 py-3 gap-3">
        <div className="flex flex-col leading-tight">
          <span className="text-off-white font-bold text-sm">From €15</span>
          <span className="text-off-white/60 text-[11px]">Early Bird tickets</span>
        </div>
        <Link
          href={eventData.tickets.single.href}
          className="bg-gradient-to-r from-accent-yellow to-accent-yellow-glow text-navy font-bold px-5 py-3 rounded-xl text-sm shadow-lg active:scale-95 transition-transform whitespace-nowrap"
        >
          Buy Tickets →
        </Link>
      </div>
    </div>
  );
}
