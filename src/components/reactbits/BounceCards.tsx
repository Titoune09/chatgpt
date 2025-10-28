import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

type BounceCard = {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
};

type BounceCardsProps = {
  items: BounceCard[];
  className?: string;
};

export function BounceCards({ items, className }: BounceCardsProps) {
  return (
    <div className={cn('flex flex-nowrap gap-6 overflow-x-auto pb-4', className)}>
      {items.map((item) => (
        <motion.article
          key={item.id}
          className="group relative w-[18rem] flex-shrink-0 overflow-hidden rounded-[2.5rem] border border-white/10 bg-steel/80 p-6 text-left shadow-subtle backdrop-blur"
          whileHover={{ y: -12 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        >
          <div className="flex items-center gap-3">
            <img src={item.avatar} alt={item.author} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
            <div>
              <div className="font-display text-base text-chrome">{item.author}</div>
              <div className="text-xs uppercase tracking-[0.35em] text-accent/70">{item.role}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-chrome/70">{item.quote}</p>
          <div className="mt-6 flex items-center gap-1 text-amber-300" aria-label={`${item.rating} sur 5`}>
            {Array.from({ length: 5 }).map((_, index) => (
              <span key={index} aria-hidden>
                {index < item.rating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
