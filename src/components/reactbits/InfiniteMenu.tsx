import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../../lib/cn';

type InfiniteMenuItem = {
  href: string;
  label: string;
  description?: string;
};

type InfiniteMenuProps = {
  items: InfiniteMenuItem[];
  className?: string;
  speed?: number;
};

export function InfiniteMenu({ items, className, speed = 45 }: InfiniteMenuProps) {
  const base = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useAnimationFrame((_, delta) => {
    setOffset((prev) => {
      const newOffset = prev + (speed * delta) / 1000;
      const width = base.current?.scrollWidth ?? 1;
      return newOffset >= width ? 0 : newOffset;
    });
  });

  const repeatedItems = [...items, ...items];

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        ref={base}
        className="flex w-max items-center gap-5 whitespace-nowrap"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {repeatedItems.map((item, index) => (
          <motion.a
            whileHover={{ scale: 1.05 }}
            key={`${item.href}-${index}`}
            href={item.href}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-night/60 px-5 py-2 text-left text-sm text-chrome/80 transition-colors hover:border-accent hover:text-accent"
          >
            <span
              aria-hidden
              className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-gradient-to-br from-accent/20 via-transparent to-accent/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(123,223,242,0.55)]" />
            </span>
            <span className="flex flex-col leading-snug">
              <span className="text-[0.65rem] uppercase tracking-[0.4em] text-chrome/60">{item.label}</span>
              {item.description && <span className="text-xs text-chrome/50">{item.description}</span>}
            </span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
