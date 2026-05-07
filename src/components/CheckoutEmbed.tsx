'use client';

import { useEffect, useRef, useState } from 'react';
import { Lock, Maximize2, Minimize2, ExternalLink } from 'lucide-react';
import { eventData } from '@/data/event';

type Variant = 'single' | 'couple' | 'family';

const isVariant = (v: string | null): v is Variant =>
  v === 'single' || v === 'couple' || v === 'family';

/**
 * Embedded Wix checkout with:
 *  - "Secure Checkout" header bar (lock icon, SSL framing)
 *  - Expand button → fullscreen overlay with Done button
 *  - On mobile: auto-expand to fullscreen the moment the user taps inside the
 *    iframe (cross-origin iframes don't expose typing events, but they DO
 *    cause the parent window to blur with the iframe as activeElement).
 *  - Reads `?ticket=single|couple|family` from the URL on mount and pre-selects
 *    the right tier in the embedded Wix page.
 *
 * Reads `?ticket=` via window.location instead of `useSearchParams()` so the
 * /tickets route stays statically prerenderable.
 */
export function CheckoutEmbed() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [variant, setVariant] = useState<Variant | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [autoExpanded, setAutoExpanded] = useState(false);

  // Read pre-selected variant from the URL on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const t = new URLSearchParams(window.location.search).get('ticket');
    if (isVariant(t)) setVariant(t);
  }, []);

  // ESC closes expanded mode + lock body scroll while expanded
  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setExpanded(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [expanded]);

  // Auto-expand on mobile when user taps into the iframe
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onBlur = () => {
      // Defer one tick so document.activeElement reflects the new state.
      setTimeout(() => {
        if (
          !autoExpanded &&
          !expanded &&
          window.innerWidth < 768 &&
          document.activeElement === iframeRef.current
        ) {
          setAutoExpanded(true);
          setExpanded(true);
        }
      }, 0);
    };
    window.addEventListener('blur', onBlur);
    return () => window.removeEventListener('blur', onBlur);
  }, [autoExpanded, expanded]);

  const src = variant
    ? `${eventData.ticketUrl}?ticket=${variant}`
    : eventData.ticketUrl;

  return (
    <div id="secure-checkout" className="scroll-mt-24">
      {/* Trust header bar — sits flush above the iframe */}
      <div className="flex items-center justify-between bg-navy-deep border border-blue-grey/40 rounded-t-2xl px-4 md:px-5 py-3.5">
        <div className="flex items-center gap-2.5 text-off-white text-xs md:text-sm min-w-0">
          <span className="inline-flex w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-400/40 items-center justify-center flex-shrink-0">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
          </span>
          <span className="truncate">
            <strong className="font-semibold">Secure Checkout</strong>
            <span className="hidden sm:inline text-off-white/55">
              {' '}
              — SSL encrypted via Wix Events
            </span>
          </span>
        </div>
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="inline-flex items-center gap-1.5 text-accent-yellow hover:text-accent-yellow-glow text-xs md:text-sm font-bold flex-shrink-0"
          aria-label="Expand checkout to fullscreen"
        >
          <Maximize2 className="w-4 h-4" />
          <span className="hidden sm:inline">Expand</span>
        </button>
      </div>

      {/* Iframe — inline OR fullscreen overlay depending on `expanded` */}
      <div
        className={
          expanded
            ? 'fixed inset-0 z-[90] bg-navy-deep flex flex-col'
            : 'relative rounded-b-2xl overflow-hidden border border-t-0 border-blue-grey/40 shadow-2xl bg-off-white'
        }
      >
        {/* Fullscreen-only header */}
        {expanded && (
          <div className="flex items-center justify-between bg-navy-deep border-b border-blue-grey/30 px-4 md:px-5 py-3 flex-shrink-0">
            <div className="flex items-center gap-2 text-off-white text-sm">
              <span className="inline-flex w-7 h-7 rounded-full bg-emerald-500/15 border border-emerald-400/40 items-center justify-center">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
              </span>
              <strong className="font-semibold">Secure Checkout</strong>
            </div>
            <button
              type="button"
              onClick={() => setExpanded(false)}
              className="inline-flex items-center gap-1.5 bg-accent-yellow hover:bg-accent-yellow-glow text-navy text-sm font-bold px-4 py-2 rounded-xl shadow-md"
              aria-label="Close fullscreen checkout"
            >
              <Minimize2 className="w-4 h-4" />
              Done
            </button>
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={src}
          title="The Relocation Expo — Ticket Checkout"
          className={
            expanded
              ? 'flex-1 w-full bg-off-white border-0'
              : 'w-full h-[1100px] md:h-[1400px] lg:h-[1500px] bg-off-white border-0'
          }
          loading="lazy"
          allow="payment"
          referrerPolicy="origin-when-cross-origin"
        />
      </div>

      {/* Inline fallback link */}
      <p className="text-off-white/50 text-xs text-center mt-4">
        Embed not loading?{' '}
        <a
          href={eventData.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-yellow hover:no-underline underline inline-flex items-center gap-1"
        >
          Open the secure checkout in a new tab
          <ExternalLink className="w-3 h-3" />
        </a>
      </p>
    </div>
  );
}
