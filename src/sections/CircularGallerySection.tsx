import { CircularGallery } from '../components/reactbits/CircularGallery';
import { circularGalleryItems } from '../data/page';

export function CircularGallerySection() {
  return (
    <section id="gallery" className="relative mx-auto mt-40 max-w-6xl px-6">
      <div className="rounded-[3rem] border border-white/10 bg-steel/80 p-12 text-center shadow-subtle backdrop-blur">
        <h2 className="font-display text-3xl text-chrome sm:text-4xl">Galerie orbitale</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-chrome/70">
          Un anneau d’images à draguer ou scroller pour zoomer sur vos moments clés, centre tenu par une métrique phare.
        </p>
        <div className="mt-12">
          <CircularGallery items={circularGalleryItems} centerContent={<span>+78% d’engagement</span>} />
        </div>
      </div>
    </section>
  );
}
