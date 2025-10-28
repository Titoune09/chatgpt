const { useState, useEffect, useMemo, useRef } = React;

const heroCars = [
  {
    name: "Apex R-9",
    tagline: "Hypercoupe électrique à la précision chirurgicale",
    description:
      "Traction intégrale vectorielle, aérodynamique active et batterie solide pour des runs interminables.",
    image:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1400&q=80",
    accent: ["#ff8d45", "#ff2d55"],
    stats: [
      { label: "0-100 km/h", value: "2,1 s" },
      { label: "Autonomie", value: "540 km" },
      { label: "Puissance", value: "1 150 ch" },
    ],
  },
  {
    name: "Nebula GT",
    tagline: "Le grand tourisme métamorphosé en vaisseau spatial",
    description:
      "Suspension magnétique, cockpit holographique et bande-son spatiale orchestrée par Hans Zimmer.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80",
    accent: ["#5df7ff", "#8b5dff"],
    stats: [
      { label: "Vitesse max", value: "407 km/h" },
      { label: "Couple", value: "1 600 Nm" },
      { label: "Mode VR", value: "360°" },
    ],
  },
  {
    name: "Valkyr Shadow",
    tagline: "La légende thermique revisitée en série limitée",
    description:
      "Un V12 symphonique hybridé, un châssis sculpté en titane et des lignes inspirées des prototypes du Mans.",
    image:
      "https://images.unsplash.com/photo-1503736334956-4a72c2c51e2b?auto=format&fit=crop&w=1400&q=80",
    accent: ["#ffbb00", "#ff0062"],
    stats: [
      { label: "RPM max", value: "11 200" },
      { label: "Poids", value: "1 210 kg" },
      { label: "Production", value: "64 ex." },
    ],
  },
];

const experiences = [
  {
    title: "Club Aurora",
    description:
      "Soirées privées sur piste avec télémétrie en temps réel, chorégraphie lumineuse et DJs résidents.",
    icon: "🌌",
  },
  {
    title: "Studios Velocity",
    description:
      "Captures 3D pour configurateur XR, expériences immersives et shooting photo sous lumière volumétrique.",
    icon: "🎥",
  },
  {
    title: "Expéditions Atlas",
    description:
      "Road-trips à travers cols alpins au lever du soleil avec assistance technique et conciergerie complète.",
    icon: "🗻",
  },
];

const signatureTouches = [
  {
    title: "Design sonore sur mesure",
    details:
      "Nos ingénieurs acousticiens composent un profil moteur multi-couches pour chaque membre, jouable via application.",
  },
  {
    title: "Studio de détails futuristes",
    details:
      "Fibres luminescentes, textures paramétriques et accessoires en impression 4D pour sublimer chaque carrosserie.",
  },
  {
    title: "Data Garage personnel",
    details:
      "Vos télémétries, réglages et playlists sont synchronisés dans un hub chiffré accessible partout dans le monde.",
  },
];

const eventsTimeline = [
  {
    month: "Mai",
    title: "Run nocturne à Monaco",
    description: "Village pop-up sur la marina, démos exclusives et parade silencieuse dans les ruelles historiques.",
  },
  {
    month: "Juin",
    title: "Summit Overdrive",
    description: "Conférences, simulateurs D-BOX et laboratoire de prototypes au cœur des Dolomites.",
  },
  {
    month: "Juillet",
    title: "Sahara Hyperloop",
    description: "Exploration futuriste du désert en convoi électrifié, bivouac gastronomique et projection 8K.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1503736334956-4a72c2c51e2b?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1000&q=80",
];

function useAutoRotate(length, delay, setIndex) {
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, delay);

    return () => clearInterval(id);
  }, [length, delay, setIndex]);
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Basculer le thème">
      <span className="toggle-icon">{theme === "dark" ? "🌙" : "☀️"}</span>
      <span>{theme === "dark" ? "Mode nuit" : "Mode lumière"}</span>
    </button>
  );
}

function Hero({ car, onJoin, onViewCars }) {
  const heroStyle = {
    "--hero-primary": car.accent[0],
    "--hero-secondary": car.accent[1],
    "--hero-image": `url(${car.image})`,
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero__inner">
        <div className="hero__meta reveal">
          <p className="hero__eyebrow">Overdrive Society</p>
          <h1 className="hero__title">{car.name}</h1>
          <p className="hero__tagline">{car.tagline}</p>
          <p className="hero__description">{car.description}</p>
          <div className="hero__cta">
            <button className="btn btn--primary" onClick={onJoin}>
              Rejoindre la grille
            </button>
            <button className="btn btn--ghost" onClick={onViewCars}>
              Explorer les collections
            </button>
          </div>
        </div>
        <aside className="hero__stats reveal">
          {car.stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-card__label">{stat.label}</span>
              <span className="stat-card__value">{stat.value}</span>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

function CarShowcase({ cars, activeIndex, onSelect }) {
  const activeCar = cars[activeIndex];
  const accentStyle = {
    "--accent-primary": activeCar.accent[0],
    "--accent-secondary": activeCar.accent[1],
  };

  return (
    <section className="section reveal" id="collections" style={accentStyle}>
      <header className="section__header">
        <p className="section__eyebrow">Collections réservées</p>
        <h2 className="section__title">Hypercars sculptées pour l'émotion</h2>
        <p className="section__subtitle">
          Chaque pièce est sélectionnée pour son ADN singulier. Touchez du doigt les machines qui définissent la prochaine
          ère automobile.
        </p>
      </header>

      <div className="showcase">
        <div className="showcase__preview" role="img" aria-label={activeCar.name}>
          <div className="showcase__gradient"></div>
          <img src={activeCar.image} alt={activeCar.name} loading="lazy" />
        </div>
        <div className="showcase__list">
          {cars.map((car, index) => (
            <article
              key={car.name}
              className={`showcase-card ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => onSelect(index)}
            >
              <div className="showcase-card__meta">
                <span className="showcase-card__index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{car.name}</h3>
              </div>
              <p>{car.tagline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experiences() {
  return (
    <section className="section section--alt reveal">
      <header className="section__header">
        <p className="section__eyebrow">Expériences signature</p>
        <h2 className="section__title">Des rencontres qui dépassent la route</h2>
      </header>
      <div className="grid">
        {experiences.map((experience) => (
          <article key={experience.title} className="experience-card">
            <span className="experience-card__icon" aria-hidden="true">
              {experience.icon}
            </span>
            <h3>{experience.title}</h3>
            <p>{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SignatureTouches() {
  return (
    <section className="section reveal">
      <header className="section__header">
        <p className="section__eyebrow">Atelier iconique</p>
        <h2 className="section__title">Le raffinement poussé à l'extrême</h2>
      </header>
      <div className="accordion">
        {signatureTouches.map((touch, index) => (
          <details key={touch.title} open={index === 0}>
            <summary>
              <span>{touch.title}</span>
              <span className="summary__icon">➜</span>
            </summary>
            <p>{touch.details}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="section section--alt reveal">
      <header className="section__header">
        <p className="section__eyebrow">Agenda privé</p>
        <h2 className="section__title">Le calendrier Overdrive 2024</h2>
      </header>
      <div className="timeline">
        {eventsTimeline.map((event) => (
          <article key={event.title} className="timeline__event">
            <span className="timeline__month">{event.month}</span>
            <div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section reveal">
      <header className="section__header">
        <p className="section__eyebrow">Souvenirs d'adrénaline</p>
        <h2 className="section__title">Moments captés par nos membres</h2>
      </header>
      <div className="gallery">
        {gallery.map((image, index) => (
          <figure key={image} className={`gallery__item gallery__item--${(index % 3) + 1}`}>
            <img src={image} alt="Voiture d'exception" loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function JoinUs() {
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = data.get("email");

    if (email) {
      setSubmitted(true);
      form.reset();
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => setSubmitted(false), 4800);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <section className="join reveal">
      <div className="join__card">
        <h2>Élevez votre passion</h2>
        <p>
          Détails sur mesure, accès aux prototypes, mentorat pilotage : la porte de la société s'ouvre pour les pilotes qui
          vivent pour l'émotion pure.
        </p>
        <form className="join__form" onSubmit={handleSubmit}>
          <label>
            <span>Adresse e-mail</span>
            <input type="email" name="email" placeholder="moi@overdrive.club" required />
          </label>
          <button type="submit" className="btn btn--primary">
            Demander une invitation
          </button>
          {submitted && <p className="join__message">Merci ! Nous revenons vers vous avec les prochaines sessions.</p>}
        </form>
      </div>
      <div className="join__aside">
        <p className="join__aside-title">Services membres</p>
        <ul>
          <li>Conciergerie 24/7 pour logistique internationale</li>
          <li>Coaching pilotage par champions GT3</li>
          <li>Programme philanthropique & conservation de collections</li>
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="footer__brand">Overdrive Society</span>
        <p>La communauté francophone des passionnés de voitures visionnaires.</p>
      </div>
      <div className="footer__links">
        <a href="#collections">Collections</a>
        <a href="#">Expériences</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}

function App() {
  const prefersDark = useMemo(() => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }, []);
  const [theme, setTheme] = useState(prefersDark ? "dark" : "light");
  const [activeCar, setActiveCar] = useState(0);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useAutoRotate(heroCars.length, 12000, setActiveCar);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, [activeCar]);

  const handleJoin = () => {
    const form = document.querySelector(".join input[type='email']");
    form?.focus({ preventScroll: false });
    form?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleViewCars = () => {
    const section = document.getElementById("collections");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site">
      <nav className="floating-nav">
        <span className="floating-nav__logo">Overdrive Society</span>
        <div className="floating-nav__actions">
          <a href="#collections">Collections</a>
          <a href="#">Expériences</a>
          <a href="#">Magazine</a>
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === "dark" ? "light" : "dark")} />
        </div>
      </nav>

      <Hero car={heroCars[activeCar]} onJoin={handleJoin} onViewCars={handleViewCars} />
      <CarShowcase cars={heroCars} activeIndex={activeCar} onSelect={setActiveCar} />
      <Experiences />
      <SignatureTouches />
      <Timeline />
      <Gallery />
      <JoinUs />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
