import { SpotlightCard } from '../components/reactbits/SpotlightCard';

export function CTASection() {
  return (
    <section id="cta" className="relative mt-40 overflow-hidden bg-night px-6">
      <div className="absolute inset-x-0 top-0 h-40 bg-night" style={{ clipPath: 'path("M0,80 C240,40 480,120 720,60 C960,0 1200,100 1440,40 L1440,0 L0,0 Z")' }} />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-night" style={{ clipPath: 'path("M0,0 C240,60 480,-20 720,40 C960,100 1200,20 1440,80 L1440,160 L0,160 Z")' }} />
      <div className="relative mx-auto max-w-4xl pb-32 pt-32">
        <SpotlightCard
          title="Prêt à sculpter votre prochain lancement?"
          description="Bénéficiez d’une immersion sur-mesure avec notre équipe de creative technologists."
          className="bg-steel/80"
        >
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex-1 rounded-full border border-accent/50 bg-accent/80 px-6 py-3 text-center text-sm font-medium text-night transition-colors hover:bg-accent"
            >
              Lancer un atelier
            </a>
            <a
              href="#hero"
              className="flex-1 rounded-full border border-white/10 bg-transparent px-6 py-3 text-center text-sm font-medium text-chrome/80 transition-colors hover:text-chrome"
            >
              Télécharger le playbook
            </a>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
