import { cn } from '../../lib/cn';

export function GlassCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-white/5 before:to-white/0',
        className
      )}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
