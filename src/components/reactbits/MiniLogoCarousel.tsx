import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../../lib/cn';

type MiniLogoCarouselProps = {
  logos: { id: string; src: string; alt: string }[];
  className?: string;
  speed?: number;
};

export function MiniLogoCarousel({ logos, className, speed = 35 }: MiniLogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useAnimationFrame((_, delta) => {
    setOffset((prev) => {
      const width = containerRef.current?.scrollWidth ?? 1;
      const next = prev + (speed * delta) / 1000;
      return next >= width / 2 ? 0 : next;
    });
  });

  const items = [...logos, ...logos];

  return (
    <div className={cn('relative overflow-hidden rounded-full border border-white/10 bg-night/60 py-4', className)}>
      <motion.div
        ref={containerRef}
        className="flex w-max items-center gap-10"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {items.map((logo, index) => (
          <div key={`${logo.id}-${index}`} className="flex h-10 w-24 items-center justify-center opacity-80">
            <img src={logo.src} alt={logo.alt} className="max-h-full w-auto" loading="lazy" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
