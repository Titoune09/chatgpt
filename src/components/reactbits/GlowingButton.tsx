import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

const buttonStyles = cva(
  'relative inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-night',
  {
    variants: {
      intent: {
        primary: 'bg-gradient-to-r from-accent via-accent/90 to-sky-400 text-night shadow-subtle hover:brightness-110',
        secondary: 'border border-white/10 bg-steel/70 text-chrome hover:border-accent/50 hover:text-accent',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
);

export type GlowingButtonProps = VariantProps<typeof buttonStyles> &
  Omit<ComponentPropsWithoutRef<typeof motion.button>, 'children'> & {
    children?: React.ReactNode;
    icon?: React.ReactNode;
  };

export const GlowingButton = forwardRef<HTMLButtonElement, GlowingButtonProps>(
  ({ className, intent, children, icon, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={buttonStyles({ intent, className })}
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
