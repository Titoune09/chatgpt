import { useState } from 'react';
import { ScrollStack } from '../components/reactbits/ScrollStack';
import { Stepper } from '../components/reactbits/Stepper';
import { processSteps } from '../data/page';

export function ProcessSection() {
  const [current, setCurrent] = useState(0);
  return (
    <section id="processus" className="relative mx-auto mt-40 max-w-6xl px-6">
      <div className="rounded-[3rem] border border-white/10 bg-night/70 p-12 shadow-subtle backdrop-blur">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="flex-1">
            <h2 className="font-display text-3xl text-chrome sm:text-4xl">Le parcours membre calibré</h2>
            <p className="mt-4 text-base text-chrome/70">
              Chaque étape est pensée comme un arrêt au stand : rapide, limpide et orienté sensations.
            </p>
            <div className="mt-10 hidden lg:block">
              <Stepper steps={processSteps} currentIndex={current} onStepChange={setCurrent} />
            </div>
          </div>
          <div className="flex-1">
            <ScrollStack
              count={processSteps.length}
              render={({ index, isActive }) => {
                const step = processSteps[index];
                return (
                  <article
                    className={`relative rounded-[2.5rem] border border-white/10 bg-steel/70 p-6 transition-colors ${isActive ? 'border-accent/60 shadow-halo' : ''}`}
                    onMouseEnter={() => setCurrent(index)}
                    onFocus={() => setCurrent(index)}
                    tabIndex={0}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-night/60 text-xs uppercase tracking-[0.35em] text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          {step.phase && (
                            <span className="rounded-full bg-accent/15 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-accent">
                              {step.phase}
                            </span>
                          )}
                          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-chrome/50">Étape {String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <h3 className="font-display text-xl text-chrome">{step.title}</h3>
                        <p className="text-sm text-chrome/60">{step.description}</p>
                      </div>
                    </div>
                  </article>
                );
              }}
              className="space-y-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
