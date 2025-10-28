import { motion } from 'framer-motion';
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
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn('rounded-3xl border border-white/5 bg-steel/70 p-8 shadow-subtle backdrop-blur', className)}
    >
      <div className="space-y-3">
        <h4 className="font-display text-xl text-accent">{title}</h4>
        <p className="text-sm text-chrome/70">{description}</p>
        {children}
      </div>
    </motion.article>
  );
}
