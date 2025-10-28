import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ScrollBasedParallaxSection({
  media,
  children,
  direction = 'left',
}: {
  media: React.ReactNode;
  children: React.ReactNode;
  direction?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], direction === 'left' ? ['-12%', '12%'] : ['12%', '-12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <div ref={ref} className="relative grid gap-10 overflow-hidden rounded-[3rem] border border-white/5 bg-night/70 p-10 shadow-halo backdrop-blur lg:grid-cols-2">
      <motion.div style={{ x, opacity }} className="relative h-80 overflow-hidden rounded-3xl border border-white/5">
        {media}
      </motion.div>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
}
