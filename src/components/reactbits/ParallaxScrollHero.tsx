import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ParallaxScrollHero({ background, overlay }: { background: React.ReactNode; overlay: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <div ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        {background}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-night/40 via-night/70 to-night" />
      <div className="relative z-10 w-full max-w-6xl px-6 py-24">{overlay}</div>
    </div>
  );
}
