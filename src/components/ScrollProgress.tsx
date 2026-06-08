'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin animated progress bar fixed under the header. Gives the site
 * a premium "we know what we're at" feel - visitors see exactly how much
 * content is below them.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-accent-yellow via-accent-yellow-glow to-accent-yellow origin-left"
      style={{ scaleX }}
    />
  );
}
