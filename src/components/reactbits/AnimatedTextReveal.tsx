import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const wordVariants = {
  hidden: { y: '100%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: i * 0.08, type: 'spring', stiffness: 180, damping: 20 },
  }),
};

export function AnimatedTextReveal({ text, as: As = 'h1', className }: { text: string; as?: any; className?: string }) {
  const words = text.split(' ');
  return (
    <As className={className}>
      <span className="inline-flex flex-wrap overflow-hidden">
        {words.map((word, index) => (
          <span key={`${word}-${index}`} className="mr-3 inline-flex overflow-hidden">
            <motion.span
              custom={index}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </As>
  );
}

export function AnimatedSubText({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 0.9, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
      className="text-lg text-chrome/70 md:text-xl"
    >
      {children}
    </motion.p>
  );
}
