import { BounceCards } from '../components/reactbits/BounceCards';
import { AnimatedList } from '../components/reactbits/AnimatedList';
import { testimonials } from '../data/page';

export function TestimonialsSection() {
  return (
    <section id="temoignages" className="relative mx-auto mt-40 max-w-6xl px-6">
      <div className="rounded-[3rem] border border-white/10 bg-[#10141c] p-12 shadow-subtle">
        <header className="text-center">
          <h2 className="font-display text-3xl text-chrome sm:text-4xl">Retours de la communauté</h2>
          <p className="mt-4 text-base text-chrome/70">
            Un ruban de témoignages qui respire l’asphalte : coups de cœur circuits, roadtrips et accessibilité renforcée.
          </p>
        </header>
        <div className="mt-12">
          <BounceCards items={testimonials} />
        </div>
        <AnimatedList
          className="mt-10"
          items={testimonials}
          renderItem={(testimonial) => (
            <blockquote className="rounded-[2.5rem] border border-white/10 bg-steel/70 p-6 text-left text-sm text-chrome/70">
              <p>{testimonial.quote}</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.35em] text-accent/70">
                {testimonial.author} — {testimonial.role}
              </footer>
            </blockquote>
          )}
        />
      </div>
    </section>
  );
}
