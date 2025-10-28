import { AuroraBackground } from '../components/reactbits/AuroraBackground';
import { GlassIcons } from '../components/reactbits/GlassIcons';
import { technoCards } from '../data/page';

export function TechnologiesSection() {
  return (
    <section id="technos" className="relative mx-auto mt-40 max-w-6xl px-6">
      <AuroraBackground className="p-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl text-chrome sm:text-4xl">Modules exclusifs RevPulse</h2>
          <p className="mt-4 text-base text-chrome/70">
            Une constellation de services à activer : garage connecté, audio immersif et IA coéquipière.
          </p>
        </div>
        <div className="mt-12">
          <GlassIcons items={technoCards} className="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4" />
        </div>
      </AuroraBackground>
    </section>
  );
}
