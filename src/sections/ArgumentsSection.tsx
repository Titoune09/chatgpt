import { AnimatedList } from '../components/reactbits/AnimatedList';
import { uspList } from '../data/page';

export function ArgumentsSection() {
  return (
    <section
      id="arguments"
      className="relative mx-auto mt-32 max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-night/80 px-6 py-24 shadow-subtle"
    >
      <div className="relative z-10">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-chrome sm:text-4xl">Pourquoi RevPulse fait vibrer le club</h2>
          <p className="mt-4 text-base text-chrome/70">
            Une lecture instantanée pour comprendre comment notre garage digital nourrit chaque passion automobile.
          </p>
        </header>
        <AnimatedList
          className="mt-16"
          items={uspList}
          renderItem={(usp, index) => (
            <article
              className="group grid gap-8 rounded-[2.5rem] border border-white/10 bg-night/70 p-8 backdrop-blur md:grid-cols-2 md:items-center"
            >
              <div className={`space-y-6 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-chrome/50">
                  <span className="rounded-full bg-accent/15 px-4 py-1 text-accent">{String(index + 1).padStart(2, '0')}</span>
                  {usp.category && <span>{usp.category}</span>}
                </div>
                <h3 className="font-display text-2xl text-chrome">{usp.title}</h3>
                <p className="text-sm text-chrome/70">{usp.description}</p>
              </div>
              <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative h-56 overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-steel/60 via-night/60 to-night/40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,223,242,0.18),transparent_60%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(240,157,81,0.15),transparent_70%)]" />
                  <p className="relative flex h-full items-center p-6 text-sm text-chrome/60">
                    Interfaces pensées comme un tableau de bord : informations hiérarchisées, contraste moteur et call-to-action
                    lisibles même en gants.
                  </p>
                </div>
              </div>
            </article>
          )}
        />
      </div>
    </section>
  );
}
