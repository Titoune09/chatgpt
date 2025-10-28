import { motion } from 'framer-motion';
import { AnimatedSubText, AnimatedTextReveal } from '../components/reactbits/AnimatedTextReveal';
import { GlowingButton } from '../components/reactbits/GlowingButton';
import { ParallaxScrollHero } from '../components/reactbits/ParallaxScrollHero';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen">
      <ParallaxScrollHero
        background={
          <picture>
            <source
              srcSet="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1600&q=70"
              media="(min-width: 1024px)"
            />
            <img
              src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=70"
              alt="Silhouette d'une voiture de sport de nuit"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </picture>
        }
        overlay={
          <div className="relative flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full max-w-2xl space-y-6 rounded-3xl bg-night/65 p-10 shadow-halo backdrop-blur"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-chrome/60">LuxDrive Automotive</span>
              <AnimatedTextReveal text="Conduire en pleine conscience" as="h1" className="font-display text-5xl leading-tight md:text-6xl" />
              <AnimatedSubText>
                Des lignes épurées, une énergie maîtrisée et un habitacle intelligent pensé pour les sens. LuxDrive propose une
                vision apaisée de la haute performance.
              </AnimatedSubText>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <GlowingButton>Découvrir les modèles</GlowingButton>
                <GlowingButton intent="secondary">Réserver un essai</GlowingButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              className="grid gap-6 sm:grid-cols-3"
            >
              {["0-100 km/h en 2,9s", 'Autonomie 900 km', 'Habitacle biosourcé'].map((item) => (
                <div key={item} className="rounded-2xl border border-white/5 bg-steel/70 p-4 text-sm text-chrome/70">
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        }
      />
      <div className="noise-overlay" />
    </section>
  );
}
