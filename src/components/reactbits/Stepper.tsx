import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

type Step = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

type StepperProps = {
  steps: Step[];
  currentIndex?: number;
  onStepChange?: (index: number) => void;
  className?: string;
};

export function Stepper({ steps, currentIndex = 0, onStepChange, className }: StepperProps) {
  return (
    <div className={cn('relative flex flex-col gap-12', className)}>
      <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-accent/10 to-transparent md:block" />
      {steps.map((step, index) => {
        const isActive = index <= currentIndex;
        return (
          <motion.button
            key={step.id}
            onClick={() => onStepChange?.(index)}
            className="group relative grid grid-cols-[auto,1fr] gap-6 text-left"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-accent/30 bg-night/70" />
              <motion.div
                className={cn(
                  'relative flex h-10 w-10 items-center justify-center rounded-full border text-xl text-accent',
                  isActive ? 'border-accent bg-accent/15 text-accent' : 'border-white/10 text-chrome/40'
                )}
                animate={isActive ? { scale: 1.05 } : { scale: 1 }}
              >
                <span aria-hidden>{step.icon}</span>
              </motion.div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-display text-lg text-chrome">{step.title}</span>
                <span className="text-xs uppercase tracking-[0.35em] text-accent/60">Étape {index + 1}</span>
              </div>
              <p className="max-w-xl text-sm text-chrome/70">{step.description}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
