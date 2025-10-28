import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

type AnimatedListProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  stagger?: number;
};

export function AnimatedList<T>({ items, renderItem, className, stagger = 0.08 }: AnimatedListProps<T>) {
  return (
    <motion.ul
      className={cn('flex flex-col gap-8', className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {items.map((item, index) => (
        <motion.li
          key={index}
          variants={{
            hidden: { opacity: 0, y: 32 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
          }}
          className="list-none"
        >
          {renderItem(item, index)}
        </motion.li>
      ))}
    </motion.ul>
  );
}
