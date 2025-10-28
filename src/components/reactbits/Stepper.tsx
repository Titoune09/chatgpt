import { motion } from 'framer-motion';
import { cn } from '../../lib/cn';

type Step = {
  id: string;
  title: string;
  description: string;
  phase?: string;
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
              <div className={cn('absolute inset-0 rounded-full border', isActive ? 'border-accent/40' : 'border-white/10')} />
              <motion.span
                className={cn(
                  'relative flex h-10 w-10 items-center justify-center rounded-full bg-night/70 text-xs font-medium uppercase tracking-[0.35em]',
                  isActive ? 'text-accent' : 'text-chrome/50'
                )}
                animate={isActive ? { scale: 1.05 } : { scale: 1 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>
            </div>
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-lg text-chrome">{step.title}</span>
                {step.phase && (
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-accent">
                    {step.phase}
                  </span>
                )}
                <span className="text-[0.65rem] uppercase tracking-[0.35em] text-accent/60">Étape {String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="max-w-xl text-sm text-chrome/70">{step.description}</p>
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
