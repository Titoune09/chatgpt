import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useCallback } from 'react';
import { cn } from '../../lib/cn';

export type CardHover3DProps = {
  image: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function CardHover3D({ image, title, subtitle, children, className, onClick }: CardHover3DProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const intensity = 15;

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      rotateX.set(((y - centerY) / centerY) * -intensity);
      rotateY.set(((x - centerX) / centerX) * intensity);
    },
    [rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  const glow = useMotionTemplate`radial-gradient(circle at 50% 0%, rgba(0, 194, 255, 0.32), rgba(10, 10, 10, 0.85))`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        'group relative h-full cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-[1px] transition-all duration-300',
        className
      )}
      onClick={onClick}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-night">
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{ backgroundImage: glow }}
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <img src={image} alt={title} className="h-60 w-full object-cover opacity-90 transition duration-500 group-hover:scale-110" loading="lazy" />
        <div className="relative z-10 space-y-2 p-6">
          <h3 className="font-display text-2xl uppercase tracking-[0.25em] text-chrome drop-shadow-chrome">{title}</h3>
          {subtitle && <p className="text-sm uppercase tracking-[0.4em] text-chrome/60">{subtitle}</p>}
          <div className="text-sm text-chrome/70">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
