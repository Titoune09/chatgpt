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
            LuxDrive 360
          </a>
          <div className="hidden flex-1 md:block">
            <InfiniteMenu
              items={navLinks.map((link) => ({ href: link.href, label: link.label, icon: <span>{link.icon}</span> }))}
            />
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="md:hidden"
            >
              <div className="absolute left-1/2 top-full z-50 mt-4 h-60 w-60 -translate-x-1/2 rounded-full border border-white/10 bg-night/80 p-6 text-sm backdrop-blur">
                <ul className="grid h-full w-full grid-cols-2 place-items-center gap-4">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="flex h-20 w-20 flex-col items-center justify-center gap-1 rounded-full border border-white/10 bg-steel/70 text-center text-[0.65rem] uppercase tracking-[0.35em] text-chrome/80"
                        onClick={() => setIsOpen(false)}
                      >
                        <span aria-hidden className="text-base">
                          {link.icon}
                        </span>
                        {link.label}
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
