import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { cn } from '../../lib/cn';

type CircularGalleryItem = {
  id: string;
  image: string;
  label: string;
};

type CircularGalleryProps = {
  items: CircularGalleryItem[];
  radius?: number;
  className?: string;
  centerContent: React.ReactNode;
};

export function CircularGallery({ items, radius = 220, className, centerContent }: CircularGalleryProps) {
  const [active, setActive] = useState<string | null>(null);

  const positions = useMemo(() => {
    const step = (2 * Math.PI) / items.length;
    return items.map((item, index) => {
      const angle = index * step - Math.PI / 2;
      return {
        id: item.id,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
      };
    });
  }, [items, radius]);

  return (
    <div className={cn('relative mx-auto flex min-h-[32rem] max-w-5xl items-center justify-center', className)}>
      <div className="relative flex h-[28rem] w-[28rem] items-center justify-center">
        {positions.map((position, index) => {
          const item = items[index];
          const isActive = active === item.id;
          return (
            <motion.button
              key={item.id}
              className={cn(
                'absolute flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-night/70 backdrop-blur transition-transform',
                isActive ? 'z-20 scale-110 border-accent' : 'scale-95'
              )}
              style={{
                transform: `translate(${position.x}px, ${position.y}px)` as string,
              }}
              onMouseEnter={() => setActive(item.id)}
              onFocus={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
              onBlur={() => setActive(null)}
            >
              <img src={item.image} alt={item.label} className="h-full w-full object-cover" loading="lazy" />
            </motion.button>
          );
        })}
        <div className="relative flex h-48 w-48 flex-col items-center justify-center rounded-full border border-accent/40 bg-steel/70 text-center shadow-halo backdrop-blur">
          <div className="text-xs uppercase tracking-[0.35em] text-accent/70">Focus</div>
          <div className="mt-3 font-display text-3xl text-chrome">{centerContent}</div>
        </div>
      </div>
    </div>
  );
}
