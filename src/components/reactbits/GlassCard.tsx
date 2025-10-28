import { cn } from '../../lib/cn';

export function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/5 bg-steel/60 backdrop-blur before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-white/0 before:to-transparent',
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
