import { motion } from 'framer-motion';
import { Carousel } from '../components/reactbits/Carousel';
import { TiltedCard } from '../components/reactbits/TiltedCard';
import { showroomCarousel, showroomItems } from '../data/page';

export function ShowroomPortfolioSection() {
  return (
    <section id="showroom" className="relative mx-auto mt-36 max-w-6xl px-6">
      <div className="mb-12 text-center">
        <h2 className="font-display text-3xl text-chrome sm:text-4xl">Expériences signature du garage</h2>
        <p className="mt-4 text-base text-chrome/70">
          Une mosaïque inclinée façon piste pour parcourir nos track days, roadtrips et coulisses de collections.
        </p>
      </div>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
        {showroomItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="mb-6 break-inside-avoid"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <TiltedCard>
              <div className="relative overflow-hidden rounded-[2rem] border border-white/5">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                <div className="absolute inset-x-6 bottom-8 space-y-2">
                  <h3 className="font-display text-2xl text-chrome">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.35em] text-accent/80">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-accent/30 px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="rounded-full border border-white/10 bg-steel/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-chrome">
                    Ouvrir le dossier
                  </button>
                </div>
              </div>
              <p className="mt-4 text-sm text-chrome/70">{item.specs}</p>
            </TiltedCard>
          </motion.div>
        ))}
      </div>
      <div className="mt-12">
        <Carousel items={showroomCarousel} />
      </div>
    </section>
  );
}
