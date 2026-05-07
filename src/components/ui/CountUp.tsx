'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  to: number;
  prefix?: string;
  suffix?: string;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
  decimals?: number;
}

/**
 * Premium count-up stat. Counts only when scrolled into view.
 * Uses Intersection Observer + requestAnimationFrame so it stays light
 * (no framer-motion dependency, avoiding RSC/manifest quirks).
 */
export function CountUp({
  to,
  prefix = '',
  suffix = '',
  duration = 1600,
  className,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const start = (timestamp: number, fromTime: number) => {
      const elapsed = timestamp - fromTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * to);
      if (progress < 1) requestAnimationFrame((t) => start(t, fromTime));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            if (reduce) {
              setValue(to);
            } else {
              requestAnimationFrame((t) => start(t, t));
            }
            observer.disconnect();
          }
        }
      },
      { rootMargin: '-80px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  const display = `${prefix}${value.toFixed(decimals)}${suffix}`;
  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
