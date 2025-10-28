import { motion } from 'framer-motion';
import { ScrollBasedParallaxSection } from '../components/reactbits/ScrollBasedParallaxSection';
import { innovations } from '../data/technology';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';

export function TechnologySection() {
  return (
    <section id="innovation" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-20 flex flex-col gap-4 text-center">
        <span className="text-xs uppercase tracking-[0.6em] text-chrome/50">Technologie & Design</span>
        <h2 className="font-display text-4xl uppercase tracking-[0.3em] md:text-5xl">Innovation sensible</h2>
        <p className="mx-auto max-w-3xl text-sm text-chrome/60">
          Chaque section du véhicule est sculptée par les flux d'air et orchestrée par une intelligence embarquée. Découvrez les piliers d'une expérience de conduite augmentée.
        </p>
      </div>

      <div className="space-y-16">
        {innovations.map((innovation, index) => (
          <ScrollBasedParallaxSection
            key={innovation.id}
            direction={index % 2 === 0 ? 'left' : 'right'}
            media={
              innovation.media.endsWith('.mp4') ? (
                <video src={innovation.media} className="h-full w-full object-cover" autoPlay loop muted playsInline />
              ) : (
                <img src={innovation.media} alt={innovation.title} className="h-full w-full object-cover" loading="lazy" />
              )
            }
          >
            <motion.div className="space-y-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-xs uppercase tracking-[0.5em] text-neon/70">{innovation.subtitle}</span>
              <h3 className="font-display text-3xl uppercase tracking-[0.3em] text-chrome">{innovation.title}</h3>
              <p className="max-w-xl text-sm text-chrome/60">{innovation.description}</p>
            </motion.div>
          </ScrollBasedParallaxSection>
        ))}
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        <SpotlightCard title="Châssis sensoriel" description="4 800 capteurs synchronisés, un maillage neuronal qui anticipe vos gestes et la route.">
          <p className="text-sm text-chrome/60">
            Pilot Assist Vision™ scanne 360° et projette en réalité augmentée les trajectoires optimales.
          </p>
        </SpotlightCard>
        <SpotlightCard title="Son immersif" description="64 haut-parleurs invisibles calibrés pour un sound design synesthésique.">
          <p className="text-sm text-chrome/60">
            Adapt Sound AI™ mixe en temps réel l'acoustique du cockpit selon votre rythme cardiaque.
          </p>
        </SpotlightCard>
        <SpotlightCard title="Matériaux vivants" description="Peinture auto-cicatrisante, fibres lumineuses et textures reprogrammables.">
          <p className="text-sm text-chrome/60">
            Chromatic Skin™ change de teinte en fonction de la luminosité et des stimuli environnementaux.
          </p>
        </SpotlightCard>
      </div>
    </section>
  );
}
