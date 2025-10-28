import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CardHover3D } from '../components/reactbits/CardHover3D';
import { MasonryLayout } from '../components/reactbits/MasonryLayout';
import { GlowingButton } from '../components/reactbits/GlowingButton';
import { models, type ModelSpec } from '../data/models';
import { GlassCard } from '../components/reactbits/GlassCard';

export function ShowroomSection() {
  const [selected, setSelected] = useState<ModelSpec | null>(models[0]);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (model: ModelSpec) => {
    setSelected(model);
    setIsOpen(true);
  };

  return (
    <section id="showroom" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.5em] text-chrome/50">Showroom</span>
          <h2 className="font-display text-4xl uppercase tracking-[0.35em] md:text-5xl">Modèles d'exception</h2>
        </div>
        <p className="max-w-2xl text-sm text-chrome/60">
          Chaque véhicule est un manifeste technologique, assemblé à la main dans nos ateliers stériles. Découvrez les fiches interactives et plongez dans les galeries 8K.
        </p>
      </div>
      <MasonryLayout
        items={models.map((model) => (
          <CardHover3D
            key={model.id}
            image={model.image}
            title={model.name}
            subtitle={model.price}
            onClick={() => openModal(model)}
          >
            <div className="flex flex-wrap gap-3 text-xs text-chrome/60">
              <span>{model.power}</span>
              <span>{model.acceleration}</span>
              <span>{model.range}</span>
            </div>
          </CardHover3D>
        ))}
      />

      <AnimatePresence>
        {isOpen && selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-night/80 backdrop-blur-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              layout
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="relative mx-6 max-w-5xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-steel/80 p-10 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.button
                aria-label="Fermer"
                className="absolute right-8 top-8 text-chrome/60 transition hover:text-chrome"
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
              >
                ✕
              </motion.button>
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div className="space-y-6">
                  <div className="flex gap-4 overflow-x-auto rounded-2xl border border-white/10 p-2">
                    {selected.gallery.map((image, index) => (
                      <motion.img
                        key={image}
                        src={image}
                        alt={`${selected.name} ${index + 1}`}
                        className="h-48 w-72 flex-shrink-0 rounded-[1.5rem] object-cover"
                        loading="lazy"
                        whileHover={{ scale: 1.03 }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-chrome/70 md:grid-cols-4">
                    <GlassCard className="p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-chrome/40">Puissance</p>
                      <p className="text-lg text-neon">{selected.power}</p>
                    </GlassCard>
                    <GlassCard className="p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-chrome/40">0-100</p>
                      <p className="text-lg text-neon">{selected.acceleration}</p>
                    </GlassCard>
                    <GlassCard className="p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-chrome/40">Autonomie</p>
                      <p className="text-lg text-neon">{selected.range}</p>
                    </GlassCard>
                    <GlassCard className="p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-chrome/40">V. max</p>
                      <p className="text-lg text-neon">{selected.topSpeed}</p>
                    </GlassCard>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="font-display text-3xl uppercase tracking-[0.35em]">{selected.name}</h3>
                  <p className="text-sm text-chrome/60">{selected.description}</p>
                  <div className="rounded-2xl border border-white/10 p-6 text-sm text-chrome/70">
                    <p className="uppercase tracking-[0.4em] text-chrome/40">Tarif</p>
                    <p className="mt-2 text-2xl text-neon">{selected.price}</p>
                  </div>
                  <GlowingButton
                    onClick={() => {
                      console.info(`Demande d'essai pour ${selected.name}`);
                    }}
                  >
                    Essayer ce modèle
                  </GlowingButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
