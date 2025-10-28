import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { AnimatedSubText, AnimatedTextReveal } from '../components/reactbits/AnimatedTextReveal';
import { GlowingButton } from '../components/reactbits/GlowingButton';
import { ParallaxScrollHero } from '../components/reactbits/ParallaxScrollHero';
import { BackgroundBeams } from '../components/reactbits/BackgroundBeams';
import { LogoReveal } from '../components/LogoReveal';

const videoSources = [
  'https://cdn.coverr.co/videos/coverr-night-drive-4619/1080p.mp4',
  'https://cdn.coverr.co/videos/coverr-night-drive-1460/1080p.mp4',
];

export function HeroSection() {
  const videoSrc = useMemo(() => videoSources[Math.floor(Math.random() * videoSources.length)], []);

  return (
    <section id="hero" className="relative min-h-screen">
      <ParallaxScrollHero
        background={
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1518552781804-450675335c69?auto=format&fit=crop&w=1600&q=80"
            src={videoSrc}
          />
        }
        overlay={
          <div className="relative z-10 flex flex-col items-start gap-12">
            <BackgroundBeams />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full max-w-xl space-y-6"
            >
              <span className="text-xs uppercase tracking-[0.6em] text-chrome/60">LuxDrive Automotive</span>
              <AnimatedTextReveal text="Drive the Future." as="h1" className="font-display text-5xl leading-tight md:text-7xl" />
              <AnimatedSubText>
                Une expérience automobile immersive, fusion ultime entre performance, design et intelligence augmentée.
              </AnimatedSubText>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <GlowingButton>Découvrir les modèles</GlowingButton>
                <GlowingButton intent="secondary" glow={false} className="border-white/20">
                  Réserver un essai
                </GlowingButton>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
            >
              <LogoReveal />
              <div className="absolute inset-x-0 -bottom-10 text-center text-xs uppercase tracking-[0.6em] text-chrome/50">
                Concept HoloPulse™
              </div>
            </motion.div>
          </div>
        }
      />
      <div className="noise-overlay" />
    </section>
  );
}
