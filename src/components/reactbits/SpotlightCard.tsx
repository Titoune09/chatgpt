import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { cn } from '../../lib/cn';

export type SpotlightCardProps = {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  glowColor?: string;
  reducedMotion?: boolean;
};

export function SpotlightCard({
  title,
  description,
  className,
  children,
  glowColor = 'rgba(123, 223, 242, 0.55)',
  reducedMotion,
}: SpotlightCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isReduced, setIsReduced] = useState(reducedMotion ?? false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setIsReduced(reducedMotion ?? media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, [reducedMotion]);

  const background = useMotionTemplate`radial-gradient(400px circle at ${x}px ${y}px, ${glowColor}, transparent 60%)`;

  return (
    <motion.article
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - bounds.left);
        y.set(event.clientY - bounds.top);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileHover={isReduced ? undefined : { y: -10 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className={cn(
        'group relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-steel/80 p-8 shadow-subtle backdrop-blur-xl',
        'ring-1 ring-white/5 transition-transform',
        className
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={isReduced ? undefined : { background }}
      />
      <div className="relative space-y-4">
        <h4 className="font-display text-3xl tracking-tight text-chrome">{title}</h4>
        <p className="max-w-xl text-base text-chrome/70">{description}</p>
        {children}
      </div>
    </motion.article>
  );
}
