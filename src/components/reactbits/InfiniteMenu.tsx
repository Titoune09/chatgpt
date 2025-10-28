import { motion, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { cn } from '../../lib/cn';

type InfiniteMenuItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
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
        className="flex w-max items-center gap-6 whitespace-nowrap"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {repeatedItems.map((item, index) => (
          <motion.a
            whileHover={{ scale: 1.05 }}
            key={`${item.href}-${index}`}
            href={item.href}
            className="flex items-center gap-3 rounded-full border border-white/10 bg-night/60 px-4 py-2 text-sm text-chrome/80 transition-colors hover:border-accent hover:text-accent"
          >
            <span className="text-lg" aria-hidden>
              {item.icon}
            </span>
            <span>{item.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
