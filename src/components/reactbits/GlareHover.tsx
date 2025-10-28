import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';
import { cn } from '../../lib/cn';

type GlareHoverProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'div';
};

export function GlareHover({ children, className, as = 'div' }: GlareHoverProps) {
  const components = {
    button: motion.button,
    div: motion.div,
  } as const;
  const Component = components[as];
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue('50%');
  const glareY = useMotionValue('50%');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
      glareX.set('50%');
      glareY.set('50%');
    };
    window.addEventListener('blur', handleLeave);
    return () => window.removeEventListener('blur', handleLeave);
  }, [glareX, glareY, rotateX, rotateY]);

  return (
    <Component
      className={cn(
        'group relative overflow-hidden rounded-full border border-white/10 bg-steel/70 px-6 py-3 text-sm uppercase tracking-[0.32em] text-chrome shadow-halo backdrop-blur',
        'transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:shadow-[0_25px_45px_rgba(0,0,0,0.35)]',
        className
      )}
      style={{ rotateX, rotateY }}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;
        const rotateRange = 10;
        rotateX.set(((y - centerY) / centerY) * -rotateRange);
        rotateY.set(((x - centerX) / centerX) * rotateRange);
        glareX.set(`${(x / bounds.width) * 100}%`);
        glareY.set(`${(y / bounds.height) * 100}%`);
      }}
      onPointerLeave={() => {
        rotateX.set(0);
        rotateY.set(0);
        glareX.set('50%');
        glareY.set('50%');
      }}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.35), transparent 60%)`,
        }}
      />
      <span className="relative font-medium tracking-[0.25em] text-chrome">{children}</span>
    </Component>
  );
}
