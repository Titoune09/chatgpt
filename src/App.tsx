type Destination = {
  name: string;
  vibe: string;
  duration: string;
  price: string;
  image: string;
};

type Offer = {
  title: string;
  description: string;
  badge: string;
  includes: string[];
};

type Testimonial = {
  name: string;
  trip: string;
  quote: string;
};

const destinations: Destination[] = [
  {
    name: 'Bali, Indonésie',
    vibe: 'Temples, jungle, beach clubs et retraites bien-être',
    duration: '10 jours',
    price: 'Dès 1 490€',
    image:
      'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Kyoto, Japon',
    vibe: 'Traditions, ryokans, gastronomie et quartiers historiques',
    duration: '9 jours',
    price: 'Dès 1 980€',
    image:
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Marrakech, Maroc',
    vibe: 'Riads premium, désert d’Agafay et expériences artisanales',
    duration: '6 jours',
    price: 'Dès 890€',
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4f6d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    name: 'Reykjavik, Islande',
    vibe: 'Roadtrip volcanique, cascades et aurores boréales',
    duration: '8 jours',
    price: 'Dès 1 650€',
    image:
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1400&q=80',
  },
];

const offers: Offer[] = [
  {
    title: 'Voyage sur-mesure',
    description: 'Une proposition 100% personnalisée selon vos dates, envies et niveau de confort.',
    badge: 'Signature',
    includes: ['Conseiller dédié', 'Itinéraire personnalisé', 'Assistance 7j/7'],
  },
  {
    title: 'Lune de miel',
    description: 'Des séjours romantiques haut de gamme avec expériences exclusives à deux.',
    badge: 'Romance',
    includes: ['Hôtels d’exception', 'Moments privés', 'Surprises sur place'],
  },
  {
    title: 'Family first',
    description: 'Des vacances fluides pour les familles, sans stress logistique.',
    badge: 'Famille',
    includes: ['Activités multi-âges', 'Transferts optimisés', 'Support réactif'],
  },
  {
    title: 'Évasion express',
    description: 'City break premium prêt rapidement avec rapport qualité/prix maîtrisé.',
    badge: 'Week-end',
    includes: ['Départ rapide', 'Programme équilibré', 'Budget transparent'],
  },
];

const stats = [
  { value: '12 000+', label: 'voyageurs accompagnés' },
  { value: '48', label: 'pays partenaires' },
  { value: '4.9/5', label: 'note moyenne clients' },
  { value: '24h', label: 'délai de proposition' },
];

const testimonials: Testimonial[] = [
  {
    name: 'Camille & Idriss',
    trip: 'Lune de miel au Japon',
    quote:
      'On a eu un voyage parfaitement pensé, avec des adresses incroyables et un rythme vraiment adapté à nous.',
  },
  {
    name: 'Sophie R.',
    trip: 'Family trip à Bali',
    quote: 'Tout était clair, fluide, et l’équipe nous a aidés dès qu’on avait une question pendant le séjour.',
  },
  {
    name: 'Nassim M.',
    trip: 'Roadtrip Islande',
    quote: 'L’itinéraire était impeccable. On a profité à fond sans perdre de temps sur l’organisation.',
  },
];

const faqs = [
  {
    question: 'Combien de temps pour recevoir un devis ? ',
    answer: 'Nous envoyons une première proposition sous 24h ouvrées.',
  },
  {
    question: 'Pouvez-vous gérer les vols + hôtels + activités ?',
    answer: 'Oui, nous pouvons gérer l’ensemble du séjour ou seulement une partie selon vos besoins.',
  },
  {
    question: 'Proposez-vous des paiements échelonnés ?',
    answer: 'Oui, plusieurs options de paiement peuvent être proposées selon le dossier.',
  },
];

export default function App() {
  return (
    <div className="bg-night text-chrome">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-night/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-accent/80">Aetheria Travel</p>
            <p className="text-xs text-chrome/60">Agence de voyage premium</p>
          </div>
          <nav className="hidden gap-6 text-sm text-chrome/80 md:flex">
            <a href="#offres" className="hover:text-accent">Offres</a>
            <a href="#destinations" className="hover:text-accent">Destinations</a>
            <a href="#avis" className="hover:text-accent">Avis</a>
            <a href="#faq" className="hover:text-accent">FAQ</a>
          </nav>
          <a href="#contact" className="rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-night">
            Demander un devis
          </a>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl space-y-24 px-6 py-10 sm:py-14">
        <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent">
              Voyagez mieux
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Une agence qui transforme vos envies en vrais souvenirs.
            </h1>
            <p className="mt-5 max-w-xl text-base text-chrome/70 sm:text-lg">
              Nous créons des voyages sur-mesure élégants, structurés et sans friction. Vous profitez pleinement, on orchestre
              chaque détail.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#destinations" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-night">
                Explorer les destinations
              </a>
              <a href="#offres" className="rounded-full border border-white/20 px-6 py-3 text-sm text-chrome/90">
                Nos offres
              </a>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((item) => (
                <li key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="font-display text-2xl text-accent">{item.value}</div>
                  <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-chrome/60">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1400&q=80"
              alt="Voyage premium au bord de la mer"
              className="h-[30rem] w-full object-cover"
            />
          </div>
        </section>

        <section id="offres" className="space-y-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl">Des offres nettes, premium et efficaces</h2>
            <p className="mt-3 text-chrome/70">On garde le style, la simplicité et le sens du détail.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {offers.map((offer) => (
              <article key={offer.title} className="rounded-3xl border border-white/10 bg-steel/70 p-7">
                <span className="rounded-full bg-ember/20 px-3 py-1 text-xs uppercase tracking-[0.25em] text-ember">{offer.badge}</span>
                <h3 className="mt-4 font-display text-2xl">{offer.title}</h3>
                <p className="mt-3 text-sm text-chrome/70">{offer.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-chrome/80">
                  {offer.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="destinations" className="space-y-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl">Destinations qui déclenchent le départ</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {destinations.map((destination) => (
              <article key={destination.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-night/60">
                <img src={destination.image} alt={destination.name} className="h-56 w-full object-cover" loading="lazy" />
                <div className="space-y-2 p-5">
                  <h3 className="font-display text-2xl">{destination.name}</h3>
                  <p className="text-sm text-chrome/70">{destination.vibe}</p>
                  <div className="flex items-center justify-between pt-2 text-sm uppercase tracking-[0.15em]">
                    <span className="text-chrome/60">{destination.duration}</span>
                    <span className="text-accent">{destination.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="avis" className="space-y-8">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl">Ce que disent nos voyageurs</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-chrome/80">“{testimonial.quote}”</p>
                <p className="mt-5 font-semibold text-accent">{testimonial.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-chrome/60">{testimonial.trip}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="space-y-5 rounded-[2.5rem] border border-white/10 bg-steel/50 p-8">
          <h2 className="font-display text-3xl sm:text-4xl">FAQ</h2>
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-white/10 bg-night/70 p-5">
              <h3 className="font-semibold text-chrome">{faq.question}</h3>
              <p className="mt-2 text-sm text-chrome/70">{faq.answer}</p>
            </article>
          ))}
        </section>

        <section id="contact" className="rounded-[2.5rem] border border-accent/25 bg-gradient-to-br from-accent/10 to-transparent p-8 sm:p-10">
          <h2 className="font-display text-3xl sm:text-4xl">Parlons de votre prochain départ</h2>
          <p className="mt-3 max-w-2xl text-chrome/70">
            Dites-nous vos dates, budget et style de voyage. On vous envoie une proposition claire et personnalisée sous 24h.
          </p>
          <form className="mt-8 grid gap-4 sm:grid-cols-2">
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
            <input
              type="text"
              placeholder="Destination souhaitée"
              className="rounded-full border border-white/20 bg-night/70 px-5 py-3 text-sm outline-none focus:border-accent"
            />
            <input
              type="text"
              placeholder="Budget estimé"
              className="rounded-full border border-white/20 bg-night/70 px-5 py-3 text-sm outline-none focus:border-accent"
            />
            <textarea
              placeholder="Racontez-nous votre voyage idéal"
              className="sm:col-span-2 min-h-32 rounded-3xl border border-white/20 bg-night/70 px-5 py-4 text-sm outline-none focus:border-accent"
            />
            <button className="sm:col-span-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-night">
              Recevoir mon devis
            </button>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs uppercase tracking-[0.2em] text-chrome/50">
        © {new Date().getFullYear()} Aetheria Travel — Voyage sur-mesure
      </footer>
    </div>
  );
}
