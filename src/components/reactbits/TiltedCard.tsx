import { motion, useMotionValue } from 'framer-motion';
import { useState } from 'react';
import { cn } from '../../lib/cn';

type TiltedCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'article' | 'div';
};

export function TiltedCard({ children, className, as = 'article' }: TiltedCardProps) {
  const [isHover, setIsHover] = useState(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const Component = as === 'div' ? motion.div : motion.article;

  return (
    <Component
      className={cn(
        'group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-steel/70 p-6 shadow-subtle backdrop-blur',
        className
      )}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const range = 12;
        rotateX.set(((y - centerY) / centerY) * -range);
        rotateY.set(((x - centerX) / centerX) * range);
        setIsHover(true);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        setIsHover(false);
      }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(123, 223, 242, 0.25), transparent 60%), radial-gradient(circle at 80% 80%, rgba(240, 157, 81, 0.22), transparent 65%)',
        }}
      />
      <div className={cn('relative', isHover ? 'drop-shadow-[0_25px_45px_rgba(15,17,21,0.65)]' : undefined)}>{children}</div>
    </Component>
  );
}
