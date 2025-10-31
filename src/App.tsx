import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const missions = [
  "Transforme ton cahier en magazine spatial en n'utilisant que ce qu'il y a dans ta trousse.",
  'Compose un haïku dramatique sur la leçon actuelle en trois emojis mentaux.',
  'Crée une mini bande-annonce dans ta tête pour un film inspiré de ce chapitre.',
  'Imagine une version rétro-futuriste de la classe et note trois éléments déco.',
  'Conçois un signal secret pour prévenir un camarade qu\'il est temps de sourire.',
  'Dresse l\'inventaire de ton sac comme si tu étais un explorateur temporel.',
  'Réécris la consigne entendue comme un slogan publicitaire mystérieux.',
];

const ambiances = [
  'Ambiance agent secret feutré : tout bruit devient un indice sonore.',
  'Ambiance studio de création : chaque objet est un prototype en devenir.',
  'Ambiance capsule temporelle : tu rédiges pour le toi du futur.',
  'Ambiance festival minimaliste : les lumières néon sont imaginaires mais intenses.',
  'Ambiance café littéraire : les chuchotements deviennent des dialogues stylés.',
];

const twists = [
  'Ajoute une contrainte couleur (uniquement des tons glaciaux ou solaires).',
  'Insère un symbole secret qui n\'a de sens que pour toi.',
  'Tout doit pouvoir être raconté en trente secondes chrono.',
  'Imagine que tu dois présenter le résultat à un extraterrestre courtois.',
  'Inclue une référence subtile à ta chanson favorite du moment.',
];

const microQuests = [
  {
    title: 'Flash-croquis',
    duration: '2 min',
    description:
      'Croque en cinq traits maximum ce qui se passe devant toi comme si c\'était une scène de théâtre.',
  },
  {
    title: 'Cartographie secrète',
    duration: '3 min',
    description: 'Dessine un mini-plan de la classe et invente un surnom pour trois endroits.',
  },
  {
    title: 'Playlist silencieuse',
    duration: '1 min',
    description: 'Choisis la musique imaginaire parfaite pour le moment et écris-en trois adjectifs.',
  },
  {
    title: 'Emoji météo',
    duration: '30 s',
    description: 'Décris l\'ambiance générale avec deux emojis météo que tu garderais en mémoire.',
  },
  {
    title: 'Selfie mental',
    duration: '2 min',
    description: 'Imagine un selfie cinématique de toi ici et décris le décor en une phrase.',
  },
];

const timeline = [
  {
    label: 'Calibration',
    detail: 'Observe la salle comme si tu faisais un repérage de scène.',
    length: '1 min',
  },
  {
    label: 'Mission',
    detail: 'Lance ton mix et note les premières idées qui débordent.',
    length: '4 min',
  },
  {
    label: 'Finition',
    detail: 'Peaufine un détail qui fera sourire ton toi du futur.',
    length: '3 min',
  },
];

type MissionMix = {
  mission: string;
  ambiance: string;
  twist: string;
};

function pickAnother<T>(items: T[], previous?: T) {
  if (items.length === 1) return items[0];
  let candidate = items[Math.floor(Math.random() * items.length)];
  while (candidate === previous) {
    candidate = items[Math.floor(Math.random() * items.length)];
  }
  return candidate;
}

function createMix(previous?: MissionMix): MissionMix {
  return {
    mission: pickAnother(missions, previous?.mission),
    ambiance: pickAnother(ambiances, previous?.ambiance),
    twist: pickAnother(twists, previous?.twist),
  };
}

export default function App() {
  const [mix, setMix] = useState<MissionMix>(() => createMix());
  const [stepIndex, setStepIndex] = useState(0);

  const vibeCards = useMemo(() => microQuests.concat(microQuests.slice(0, 2)), []);

  const progress = ((stepIndex + 1) / timeline.length) * 100;

  return (
    <div className="relative min-h-screen overflow-hidden bg-night text-chrome">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-ember/20 blur-3xl sm:h-80 sm:w-80" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-chrome/5 blur-3xl" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col gap-12 px-4 pb-20 pt-16 sm:px-6 lg:px-10">
        <header className="space-y-4 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.5em] text-accent/70">Mode incognito</p>
          <h1 className="font-display text-4xl leading-tight sm:text-5xl">
            Kit anti-ennui ultra discret pour transformer la classe en studio créatif.
          </h1>
          <p className="text-base text-chrome/70 sm:text-lg">
            Pas de jeux, pas besoin de bouger de ta chaise : juste des micro missions stylées à déclencher du bout des doigts. Mobile
            first, iPad ready, imagination maximale.
          </p>
        </header>

        <section className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-accent/60">Mix instantané</p>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl">Ton brief secret</h2>
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setMix((previous) => createMix(previous))}
                className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-night shadow-halo transition focus:outline-none focus:ring focus:ring-accent/40"
              >
                Remix éclair
              </motion.button>
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base">
              <AnimatePresence mode="wait">
                <motion.p
                  key={mix.mission}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl bg-night/70 p-4"
                >
                  <span className="text-accent">Mission :</span> {mix.mission}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={mix.ambiance}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="rounded-2xl bg-night/70 p-4"
                >
                  <span className="text-ember">Ambiance :</span> {mix.ambiance}
                </motion.p>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={mix.twist}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  className="rounded-2xl bg-night/70 p-4"
                >
                  <span className="text-chrome/80">Twist :</span> {mix.twist}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-steel/70 p-6 shadow-halo backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-ember/70">Timeline</p>
                <h2 className="mt-2 font-display text-2xl">Sprint créatif de 8 minutes</h2>
              </div>
              <div className="hidden text-right text-xs text-chrome/60 sm:block">
                <p>Étape {stepIndex + 1}</p>
                <p>{timeline[stepIndex].length}</p>
              </div>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-night/60">
              <motion.div
                className="h-full rounded-full bg-ember"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>
            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={timeline[stepIndex].label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 rounded-2xl bg-night/60 p-4 text-sm sm:text-base"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-ember/60">{timeline[stepIndex].length}</p>
                  <h3 className="font-semibold text-chrome">{timeline[stepIndex].label}</h3>
                  <p className="text-chrome/70">{timeline[stepIndex].detail}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setStepIndex((index) => (index - 1 + timeline.length) % timeline.length)}
                className="w-full rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-chrome/80 transition hover:border-white/40 focus:outline-none focus:ring focus:ring-ember/30 sm:w-auto"
              >
                Étape précédente
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setStepIndex((index) => (index + 1) % timeline.length)}
                className="w-full rounded-full bg-ember px-4 py-3 text-sm font-semibold text-night transition focus:outline-none focus:ring focus:ring-ember/30 sm:w-auto"
              >
                Prochaine étincelle
              </motion.button>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent/60">Micro-quêtes</p>
              <h2 className="mt-2 font-display text-2xl">Scroll discret, idées XL</h2>
            </div>
            <span className="text-xs text-chrome/60">Glisse latéralement ➜</span>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 pb-2">
            <div className="flex gap-4">
              {vibeCards.map((quest, index) => (
                <motion.article
                  key={`${quest.title}-${index}`}
                  whileHover={{ translateY: -4 }}
                  className="min-w-[260px] rounded-2xl border border-white/10 bg-white/5 p-4 text-sm shadow-subtle backdrop-blur"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-accent/60">
                    <span>{quest.duration}</span>
                    <span>#{index + 1}</span>
                  </div>
                  <h3 className="mt-3 font-semibold text-lg text-chrome">{quest.title}</h3>
                  <p className="mt-2 text-chrome/70">{quest.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-night/60 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-accent/60">Garde-fous</p>
            <h2 className="mt-2 font-display text-2xl">Règles d\'ultra discrétion</h2>
            <ul className="mt-4 space-y-3 text-sm text-chrome/70">
              <li>• Tout reste silencieux : c\'est ton cinéma intérieur.</li>
              <li>• Un carnet ou l\'app Notes suffit comme plateau de tournage.</li>
              <li>• Chrono souple : tu peux couper ou relancer le mix quand tu veux.</li>
              <li>• Bonus : partage la mission finale uniquement avec quelqu\'un qui saura apprécier.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-ember/70">Upgrade</p>
            <h2 className="mt-2 font-display text-2xl">Si la séance dure plus longtemps</h2>
            <ul className="mt-4 space-y-3 text-sm text-chrome/70">
              <li>• Assemble plusieurs missions pour créer un mini magazine clandestin.</li>
              <li>• Écris une lettre à toi-même de demain en relatant ta meilleure trouvaille.</li>
              <li>• Crée un classement des objets les plus dramatiques de la classe.</li>
              <li>• Imagine une affiche de film inspirée du prof du jour (attention : respect total !).</li>
            </ul>
          </div>
        </section>

        <footer className="rounded-3xl border border-white/10 bg-night/80 p-6 text-sm text-chrome/60 backdrop-blur-xl">
          <p className="font-display text-lg text-chrome">
            Glisse, griffonne, respire : c\'est ton laboratoire secret pour survivre aux heures longues.
          </p>
          <p className="mt-2">
            Optimisé pour iPad et smartphones : tout se joue à un doigt, sans jamais attirer l\'attention. Quand tu veux revenir au
            monde réel, il suffit de fermer l\'onglet.
          </p>
        </footer>
      </div>
    </div>
  );
}
