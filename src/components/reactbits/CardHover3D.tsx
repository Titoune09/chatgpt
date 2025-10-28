import { motion } from 'framer-motion';
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
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      onClick={onClick}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-steel/70 shadow-subtle backdrop-blur transition-colors hover:border-accent/40',
        className
      )}
    >
      <div className="relative h-52 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-x-6 bottom-0 h-24 rounded-t-[2.5rem] bg-gradient-to-t from-night/90 to-transparent" />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-5">
        <h3 className="font-display text-2xl text-chrome">{title}</h3>
        {subtitle && <p className="text-sm font-medium text-accent/80">{subtitle}</p>}
        <div className="mt-auto text-sm text-chrome/70">{children}</div>
      </div>
    </motion.article>
  );
}
