import { motion } from 'framer-motion';
import { GlareHover } from '../components/reactbits/GlareHover';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { heroContent } from '../data/page';

export function HeroCinematicSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[90vh] flex-col justify-center overflow-hidden bg-hero-gradient px-6 pb-24 pt-32 sm:min-h-[100vh] lg:min-h-[120vh]"
    >
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-24 top-0 h-[28rem] w-[40rem] rounded-[50%] bg-[radial-gradient(circle_at_top,rgba(123,223,242,0.2),transparent_65%)]"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-16 bottom-0 h-[36rem] w-[42rem] rounded-[50%] bg-[radial-gradient(circle_at_bottom,rgba(240,157,81,0.18),transparent_70%)]"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-72 origin-bottom bg-night/40 backdrop-blur-md" style={{ clipPath: 'ellipse(130% 100% at 50% 100%)' }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-start gap-10 lg:flex-row lg:items-center">
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="clip-hero-arc relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-night/40 p-10 backdrop-blur-xl">
            <motion.h1
              className="font-display text-4xl leading-tight text-chrome sm:text-5xl lg:text-[3.4rem]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            >
              {heroContent.title}
            </motion.h1>
            <motion.p
              className="mt-6 max-w-xl text-base text-chrome/70"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {heroContent.subtitle}
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {heroContent.ctas.map((cta) => (
                <a key={cta.label} href={cta.href} className="w-full sm:w-auto" aria-label={cta.label}>
                  <GlareHover
                    className={`${cta.primary ? 'bg-accent/80 text-night hover:bg-accent' : 'bg-transparent text-chrome/80 hover:text-chrome'}`}
                  >
                    <span>{cta.label}</span>
                  </GlareHover>
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex max-w-lg flex-1 flex-col gap-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <SpotlightCard
            title="Expérience signature"
            description="Une mise en scène interactive orchestrée pour révéler votre produit comme un film." 
            className="bg-night/60"
          >
            <p className="text-sm text-chrome/60">
              Halo réactif au pointeur, effets réduits automatiquement sur mobile pour préserver la fluidité.
            </p>
          </SpotlightCard>
          <SpotlightCard
            title="CTA sans friction"
            description="Concevez des actions primaires et secondaires synchronisées avec vos objectifs de conversion."
            className="bg-steel/70"
          >
            <p className="text-sm text-chrome/60">
              Focus visible, navigation clavier fluide et boutons adaptatifs sur toute largeur en version mobile.
            </p>
          </SpotlightCard>
        </motion.div>
      </div>
    </section>
  );
}
