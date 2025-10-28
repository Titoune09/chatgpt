import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/cn';

type ScrollStackProps = {
  count: number;
  render: (props: { index: number; isActive: boolean }) => React.ReactNode;
  className?: string;
};

function ScrollStackItem({ index, render }: { index: number; render: ScrollStackProps['render'] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0.35, y: 14 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {render({ index, isActive: isInView })}
    </motion.div>
  );
}

export function ScrollStack({ count, render, className }: ScrollStackProps) {
  return (
    <div className={cn('relative flex flex-col gap-10', className)}>
      {Array.from({ length: count }, (_, index) => (
        <ScrollStackItem key={index} index={index} render={render} />
      ))}
    </div>
  );
}
