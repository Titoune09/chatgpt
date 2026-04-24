import { motion } from 'framer-motion';

type Destination = {
  name: string;
  vibe: string;
  price: string;
  image: string;
};

type Offer = {
  title: string;
  description: string;
  badge: string;
};

const destinations: Destination[] = [
  {
    name: 'Bali, Indonésie',
    vibe: 'Temples, jungle et hôtels intimistes',
    price: 'Dès 1 490€',
    image:
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Kyoto, Japon',
    vibe: 'Culture, ryokans et cerisiers en fleurs',
    price: 'Dès 1 980€',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Marrakech, Maroc',
    vibe: 'Riad premium, désert et artisanat local',
    price: 'Dès 890€',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Reykjavik, Islande',
    vibe: 'Aurores boréales et roadtrip volcanique',
    price: 'Dès 1 650€',
    image:
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80',
  },
];

const offers: Offer[] = [
  {
    title: 'Voyage sur-mesure',
    description: 'Itinéraire conçu selon vos envies, votre rythme et votre budget. Pas de package générique.',
    badge: 'Signature',
  },
  {
    title: 'Lune de miel',
    description: 'Expériences exclusives, hôtels d’exception et moments privés pensés pour marquer votre histoire.',
    badge: 'Romance',
  },
  {
    title: 'Family first',
    description: 'Programmes adaptés aux enfants, transferts fluides et activités qui plaisent à toute la famille.',
    badge: 'Famille',
  },
  {
    title: 'Évasion express',
    description: 'City-break ou long week-end premium prêt à partir en quelques jours.',
    badge: 'Last minute',
  },
];

const stats = [
  { value: '12 000+', label: 'voyageurs accompagnés' },
  { value: '48', label: 'pays partenaires' },
  { value: '4.9/5', label: 'note moyenne clients' },
];

const steps = [
  {
    title: 'Brief découverte',
    text: 'On échange 20 minutes pour comprendre votre style de voyage et vos priorités.',
  },
  {
    title: 'Création de l’itinéraire',
    text: 'Vous recevez une proposition élégante, claire et personnalisée.',
  },
  {
    title: 'Départ serein',
    text: 'Documents, assistance et suivi en direct avant et pendant le séjour.',
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-chrome">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 top-8 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-28 top-1/3 h-80 w-80 rounded-full bg-ember/20 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Aetheria Travel</p>
          <p className="text-sm text-chrome/60">Agence de voyage premium</p>
        </div>
        <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm hover:bg-white/10">
          Demander un devis
        </a>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-6xl space-y-24 px-6 pb-24">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent">
              Voyagez mieux
            </span>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Votre prochain voyage commence ici.
            </h1>
            <p className="mt-5 max-w-xl text-base text-chrome/70 sm:text-lg">
              Des séjours sur-mesure, visuellement inspirants et parfaitement organisés. Vous profitez, on gère le reste.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#destinations" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-night">
                Explorer les destinations
              </a>
              <a href="#offres" className="rounded-full border border-white/20 px-6 py-3 text-sm text-chrome/90">
                Voir nos offres
              </a>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <li key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="font-display text-2xl text-accent">{item.value}</div>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-chrome/60">{item.label}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-[2.5rem] border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1200&q=80"
              alt="Voyage premium au bord de la mer"
              className="h-[28rem] w-full object-cover"
            />
          </motion.div>
        </section>

        <section id="offres" className="space-y-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl">Des offres pensées pour chaque style</h2>
            <p className="mt-3 text-chrome/70">Simple, clair, haut de gamme. Toujours personnalisé.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {offers.map((offer) => (
              <article key={offer.title} className="rounded-3xl border border-white/10 bg-steel/70 p-7">
                <span className="rounded-full bg-ember/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-ember">{offer.badge}</span>
                <h3 className="mt-4 font-display text-2xl">{offer.title}</h3>
                <p className="mt-3 text-sm text-chrome/70">{offer.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="destinations" className="space-y-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl">Destinations qui donnent envie de partir</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {destinations.map((destination) => (
              <article key={destination.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-night/60">
                <img src={destination.image} alt={destination.name} className="h-56 w-full object-cover" loading="lazy" />
                <div className="space-y-2 p-5">
                  <h3 className="font-display text-2xl">{destination.name}</h3>
                  <p className="text-sm text-chrome/70">{destination.vibe}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-accent">{destination.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10">
          <h2 className="text-center font-display text-3xl sm:text-4xl">Votre voyage en 3 étapes fluides</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-night/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-accent">Étape {index + 1}</p>
                <h3 className="mt-3 font-display text-xl">{step.title}</h3>
                <p className="mt-2 text-sm text-chrome/70">{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2.5rem] border border-accent/25 bg-gradient-to-br from-accent/10 to-transparent p-8 sm:p-10">
          <h2 className="font-display text-3xl sm:text-4xl">Parlons de votre prochain départ</h2>
          <p className="mt-3 max-w-2xl text-chrome/70">
            Dites-nous vos envies (dates, budget, style), notre équipe vous répond avec une proposition personnalisée sous 24h.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Nom complet"
              className="rounded-full border border-white/20 bg-night/70 px-5 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              type="email"
              placeholder="Email"
              className="rounded-full border border-white/20 bg-night/70 px-5 py-3 text-sm outline-none focus:border-accent"
            />
            <textarea
              placeholder="Racontez-nous votre voyage idéal"
              className="sm:col-span-2 min-h-32 rounded-3xl border border-white/20 bg-night/70 px-5 py-4 text-sm outline-none focus:border-accent"
            />
            <button className="sm:col-span-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-night">
              Recevoir mon devis
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
