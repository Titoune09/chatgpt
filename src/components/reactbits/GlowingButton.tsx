import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

const buttonStyles = cva(
  'relative inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 font-medium uppercase tracking-[0.2em] text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon/60 focus-visible:ring-offset-2 focus-visible:ring-offset-night',
  {
    variants: {
      intent: {
        primary: 'bg-gradient-to-r from-neon/80 via-neon to-blue-500 text-night shadow-neon',
        secondary: 'bg-steel text-chrome border border-white/10 hover:border-neon/40',
      },
      glow: {
        true: 'before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:from-neon/30 before:via-engine/30 before:to-neon/30 before:blur-2xl before:opacity-70',
        false: '',
      },
    },
    defaultVariants: {
      intent: 'primary',
      glow: true,
    },
  }
);

export type GlowingButtonProps = VariantProps<typeof buttonStyles> &
  Omit<ComponentPropsWithoutRef<typeof motion.button>, 'children'> & {
    children?: React.ReactNode;
    icon?: React.ReactNode;
  };

export const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, intent, glow, children, icon, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={buttonStyles({ intent, glow, className })}
      {...props}
    >
      <span className="flex items-center gap-2">
        {children}
        {icon}
      </span>
    </motion.button>
  )
);

GlowingButton.displayName = 'GlowingButton';
