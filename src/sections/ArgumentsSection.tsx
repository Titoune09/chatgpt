import { AnimatedList } from '../components/reactbits/AnimatedList';
import { uspList } from '../data/page';

export function ArgumentsSection() {
  return (
    <section
      id="arguments"
      className="relative mx-auto mt-40 max-w-6xl overflow-hidden rounded-[3.5rem] border border-white/5 bg-[#11151f] px-6 py-24 shadow-subtle"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,223,242,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(240,157,81,0.2),transparent_60%)]" />
      <div className="relative z-10">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl text-chrome sm:text-4xl">Les bénéfices serpentins</h2>
          <p className="mt-4 text-base text-chrome/70">
            Chaque argument s’inscrit dans une trajectoire en S pour guider l’œil et le parcours de lecture.
          </p>
        </header>
        <AnimatedList
          className="mt-16"
          items={uspList}
          renderItem={(usp, index) => (
            <article
              className={`group grid gap-8 rounded-[2.5rem] border border-white/5 bg-night/60 p-6 backdrop-blur md:grid-cols-2 md:items-center ${index % 2 === 0 ? 'md:[clip-path:polygon(0%_0%,92%_0,100%_15%,100%_100%,8%_100%,0%_85%)]' : 'md:[clip-path:polygon(0%_15%,8%_0%,100%_0%,100%_85%,92%_100%,0%_100%)]'}`}
            >
              <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-steel/80 text-xl">
                  <span aria-hidden>{usp.icon}</span>
                </div>
                <h3 className="font-display text-2xl text-chrome">{usp.title}</h3>
                <p className="text-sm text-chrome/70">{usp.description}</p>
              </div>
              <div className={`relative ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative h-56 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-steel/70 to-night/40">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,223,242,0.25),transparent_65%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(240,157,81,0.25),transparent_70%)]" />
                  <p className="relative p-6 text-sm text-chrome/60">
                    Micro-motions au survol, icônes dynamiques et transitions diagonales pour un scan rapide.
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
