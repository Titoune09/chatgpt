import { motion } from 'framer-motion';

export function BackgroundBeams() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute -left-1/3 top-1/2 h-[140%] w-1/2 -translate-y-1/2 rotate-12 bg-gradient-to-b from-neon/5 via-neon/20 to-transparent blur-[80px]"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 0.6, x: 150 * index }}
          transition={{ duration: 4 + index, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
