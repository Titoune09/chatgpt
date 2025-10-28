import { HeroSection } from './sections/HeroSection';
import { ShowroomSection } from './sections/ShowroomSection';
import { TechnologySection } from './sections/TechnologySection';
import { ContactSection } from './sections/ContactSection';
import { motion } from 'framer-motion';

function Navigation() {
  const links = [
    { href: '#hero', label: 'Accueil' },
    { href: '#showroom', label: 'Modèles' },
    { href: '#innovation', label: 'Technologie' },
    { href: '#contact', label: 'Réserver' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed left-1/2 top-8 z-40 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-night/70 px-8 py-3 backdrop-blur-2xl"
    >
      <span className="font-display text-xs uppercase tracking-[0.5em] text-neon">LuxDrive</span>
      <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.4em] text-chrome/60">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-neon">
            {link.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto mt-32 max-w-6xl rounded-3xl border border-white/5 bg-steel/60 px-8 py-12 text-center text-xs text-chrome/50">
      <p>© {new Date().getFullYear()} LuxDrive Corporation. Tous droits réservés.</p>
      <p className="mt-2 uppercase tracking-[0.4em] text-chrome/30">Design by LuxDrive Studio</p>
    </footer>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-night text-chrome">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ShowroomSection />
        <TechnologySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
