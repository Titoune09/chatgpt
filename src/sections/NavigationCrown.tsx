import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { InfiniteMenu } from '../components/reactbits/InfiniteMenu';
import { navLinks } from '../data/page';

export function NavigationCrown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      id="narrative-nav"
      className="pointer-events-none fixed inset-x-0 top-6 z-40 mx-auto flex max-w-5xl items-center justify-center"
      aria-label="Navigation principale"
    >
      <motion.div
        className="pointer-events-auto relative w-full rounded-full border border-white/10 bg-night/60 px-6 py-4 backdrop-blur"
        style={{ clipPath: 'ellipse(100% 75% at 50% 50%)' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="font-display text-sm uppercase tracking-[0.35em] text-accent">
            RevPulse Garage
          </a>
          <div className="hidden flex-1 md:block">
            <InfiniteMenu items={navLinks.map((link) => ({ href: link.href, label: link.label, description: link.description }))} />
          </div>
          <div className="md:hidden">
            <button
              className="rounded-full border border-white/10 bg-steel/80 px-4 py-2 text-xs uppercase tracking-[0.4em] text-chrome"
              aria-expanded={isOpen}
              aria-controls="menu-radial"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Menu
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="menu-radial"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="md:hidden"
            >
              <div className="absolute left-0 right-0 top-full z-50 mt-4 rounded-3xl border border-white/10 bg-night/90 p-5 shadow-subtle backdrop-blur">
                <ul className="flex flex-col gap-3 text-sm">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex items-center justify-between gap-4 rounded-2xl border border-transparent px-4 py-3 text-chrome/80 transition-colors hover:border-accent/40 hover:text-chrome"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-sm font-medium">{link.label}</span>
                        {link.description && (
                          <span className="text-[0.65rem] uppercase tracking-[0.35em] text-chrome/50">{link.description}</span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
