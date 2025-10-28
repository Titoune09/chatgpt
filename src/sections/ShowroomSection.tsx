import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CardHover3D } from '../components/reactbits/CardHover3D';
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
      <div className="mb-16 space-y-6 text-center md:text-left">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-sm uppercase tracking-[0.35em] text-chrome/50">Showroom</span>
            <h2 className="font-display text-4xl md:text-5xl">Modèles d'exception</h2>
          </div>
          <p className="max-w-2xl text-sm text-chrome/60">
            Chaque véhicule est pensé comme un cocon sensoriel. Explorez notre collection et comparez les performances selon vos envies.
          </p>
        </div>
        <div className="rounded-[3rem] bg-hero-gradient p-[1px]">
          <div className="rounded-[3rem] bg-night/75 p-6 shadow-halo">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {models.map((model) => (
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
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-night/85 px-4 backdrop-blur"
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
              className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-night/95 p-8 shadow-halo"
              onClick={(event) => event.stopPropagation()}
            >
              <motion.button
                aria-label="Fermer"
                className="absolute right-6 top-6 text-chrome/50 transition hover:text-accent"
                onClick={() => setIsOpen(false)}
                whileHover={{ rotate: 90 }}
              >
                ✕
              </motion.button>
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div className="space-y-6">
                  <div className="flex gap-4 overflow-x-auto rounded-2xl border border-white/5 p-2">
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
                      <p className="text-xs uppercase tracking-[0.25em] text-chrome/40">Puissance</p>
                      <p className="text-lg text-accent">{selected.power}</p>
                    </GlassCard>
                    <GlassCard className="p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-chrome/40">0-100</p>
                      <p className="text-lg text-accent">{selected.acceleration}</p>
                    </GlassCard>
                    <GlassCard className="p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-chrome/40">Autonomie</p>
                      <p className="text-lg text-accent">{selected.range}</p>
                    </GlassCard>
                    <GlassCard className="p-4 text-center">
                      <p className="text-xs uppercase tracking-[0.25em] text-chrome/40">V. max</p>
                      <p className="text-lg text-accent">{selected.topSpeed}</p>
                    </GlassCard>
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="font-display text-3xl text-chrome">{selected.name}</h3>
                  <p className="text-sm text-chrome/60">{selected.description}</p>
                  <div className="rounded-2xl border border-white/5 p-6 text-sm text-chrome/70">
                    <p className="uppercase tracking-[0.25em] text-chrome/40">Tarif</p>
                    <p className="mt-2 text-2xl text-accent">{selected.price}</p>
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
