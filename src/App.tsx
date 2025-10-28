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
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-4 z-40"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/5 bg-night/80 px-6 py-3 text-xs uppercase tracking-[0.35em] text-chrome/70 shadow-halo backdrop-blur">
        <span className="font-display text-sm text-accent/90">LuxDrive</span>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1 text-[0.65rem] transition-colors hover:bg-steel hover:text-chrome"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

function Footer() {
  return (
    <footer className="relative mx-auto mt-32 max-w-6xl rounded-3xl border border-white/5 bg-steel/80 px-8 py-10 text-center text-sm text-chrome/60">
      <p>© {new Date().getFullYear()} LuxDrive Corporation. Tous droits réservés.</p>
      <p className="mt-2 uppercase tracking-[0.3em] text-chrome/30">Design by LuxDrive Studio</p>
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
