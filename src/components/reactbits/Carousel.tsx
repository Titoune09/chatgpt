import { motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../../lib/cn';

type CarouselItem = {
  id: string;
  image: string;
  title: string;
  description?: string;
};

type CarouselProps = {
  items: CarouselItem[];
  className?: string;
};

export function Carousel({ items, className }: CarouselProps) {
  const [active, setActive] = useState<CarouselItem | null>(null);

  return (
    <div className={cn('relative', className)}>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item)}
            className="group relative aspect-video w-64 flex-shrink-0 overflow-hidden rounded-3xl border border-white/5 bg-night/70"
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
            <span className="absolute inset-x-4 bottom-4 text-left font-medium text-sm text-chrome">{item.title}</span>
          </button>
        ))}
      </div>

      {active && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-night/90 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-steel/80 p-6 shadow-subtle backdrop-blur"
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 rounded-full border border-white/10 bg-night/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-chrome/70"
            >
              Fermer
            </button>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-3xl border border-white/5">
                <img src={active.image} alt={active.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-2xl text-chrome">{active.title}</h3>
                <p className="text-sm text-chrome/70">{active.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
