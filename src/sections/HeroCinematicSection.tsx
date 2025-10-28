import { motion } from 'framer-motion';
import { GlareHover } from '../components/reactbits/GlareHover';
import { SpotlightCard } from '../components/reactbits/SpotlightCard';
import { heroContent } from '../data/page';

export function HeroCinematicSection() {
  const heroFeatureCards = [
    {
      title: 'Briefing interactif',
      description: 'Plans de piste animés, caméras embarquées et météo live diffusés la veille du run.',
      details: 'Optimisé mobile : vibrations réduites, lecture plein écran et gestes intuitifs.',
      tone: 'bg-night/60',
    },
    {
      title: 'Garage streaming',
      description: 'Visites de collections privées avec audio spatial, fiches techniques et chat expert.',
      details: 'Qualité vidéo adaptative, sous-titres dynamiques et raccourcis clavier.',
      tone: 'bg-steel/70',
    },
    {
      title: 'Crew Radar',
      description: 'Matchmaking instantané pour copilotes, photographes et mécaniciens disponibles.',
      details: 'Notifications ciblées, filtres accessibilité et calendrier synchronisé.',
      tone: 'bg-night/70',
    },
  ];

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
      <div className="pointer-events-none absolute inset-x-0 top-16 flex justify-center">
        <motion.div
          className="h-56 w-[60rem] -rotate-6 rounded-[999px] border border-white/5 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,rgba(123,223,242,0.08)_40%,rgba(15,17,21,0.2)_100%)] opacity-80"
          animate={{ rotate: [-6, -3, -6] }}
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
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-night/60 px-4 py-2 text-[0.7rem] uppercase tracking-[0.35em] text-accent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.6 }}
            >
              {heroContent.highlight}
            </motion.span>
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
            <motion.ul
              className="mt-10 grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {heroContent.metrics?.map((metric) => (
                <li
                  key={metric.label}
                  className="rounded-[2rem] border border-white/10 bg-night/60 px-5 py-4 text-left"
                >
                  <div className="font-display text-3xl text-accent">{metric.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.3em] text-chrome/60">{metric.label}</div>
                  <p className="mt-3 text-[0.8rem] text-chrome/50">{metric.detail}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        <motion.div
          className="relative flex max-w-lg flex-1 flex-col gap-6"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          {heroFeatureCards.map((card) => (
            <SpotlightCard key={card.title} title={card.title} description={card.description} className={card.tone}>
              <p className="text-sm text-chrome/60">{card.details}</p>
            </SpotlightCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
