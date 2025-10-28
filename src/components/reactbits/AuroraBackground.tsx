import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

type AuroraBackgroundProps = {
  children: React.ReactNode;
  className?: string;
};

const auroraVariants = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: 1,
    transition: { duration: 8, repeat: Infinity, repeatType: 'reverse' as const, ease: 'easeInOut' },
  },
};

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-[3rem] border border-white/10 bg-[#10141c]', className)}>
      <motion.div
        className="pointer-events-none absolute -left-32 top-0 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_top,rgba(123,223,242,0.35),transparent_60%)]"
        variants={auroraVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_bottom,rgba(240,157,81,0.3),transparent_60%)]"
        variants={auroraVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.5 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
