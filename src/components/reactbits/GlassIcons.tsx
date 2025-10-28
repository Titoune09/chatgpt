import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

type GlassIconCardProps = {
  badge: string;
  title: string;
  description: string;
  link?: string;
};

type GlassIconsProps = {
  items: GlassIconCardProps[];
  className?: string;
};

export function GlassIcons({ items, className }: GlassIconsProps) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 xl:grid-cols-4', className)}>
      {items.map((item) => (
        <motion.article
          key={item.title}
          className="group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-steel/70 p-6 shadow-subtle backdrop-blur"
          whileHover={{ y: -10 }}
        >
          <div className="relative flex items-start gap-4">
            <motion.span
              aria-hidden
              className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-accent/15 via-transparent to-accent/5 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-accent"
              initial={{ rotate: -8 }}
              whileHover={{ rotate: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            >
              {item.badge}
            </motion.span>
            <div className="space-y-3">
              <h3 className="font-display text-xl text-chrome">{item.title}</h3>
              <p className="text-sm text-chrome/70">{item.description}</p>
              {item.link && (
                <a
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-accent transition-colors hover:text-accent/80"
                >
                  Documentation
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
