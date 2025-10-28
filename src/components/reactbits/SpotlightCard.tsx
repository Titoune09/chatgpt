import { motion, useMotionValue } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../../lib/cn';

export function SpotlightCard({
  title,
  description,
  className,
  children,
}: {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  return (
    <motion.div
      className={cn('relative overflow-hidden rounded-3xl border border-white/5 bg-night/70 p-8 backdrop-blur-3xl', className)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set(event.clientX - rect.left);
        mouseY.set(event.clientY - rect.top);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-[1px] opacity-0"
        style={{
          background: mouseX && mouseY ? `radial-gradient(250px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(0, 194, 255, 0.35), transparent 70%)` : undefined,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      <div className="relative z-10 space-y-3">
        <h4 className="font-display text-xl uppercase tracking-[0.35em] text-neon">{title}</h4>
        <p className="text-sm text-chrome/70">{description}</p>
        {children}
      </div>
    </motion.div>
  );
}
