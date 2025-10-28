export type ModelSpec = {
  id: string;
  name: string;
  price: string;
  power: string;
  acceleration: string;
  range: string;
  topSpeed: string;
  image: string;
  gallery: string[];
  description: string;
};

export const models: ModelSpec[] = [
  {
    id: 'hydra-x',
    name: 'Hydra X Hyperion',
    price: '320 000 €',
    power: '1 200 ch',
    acceleration: '0-100 km/h en 1,9 s',
    range: '820 km',
    topSpeed: '420 km/h',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80'
    ],
    description:
      "Un monstre électrique aux performances surnaturelles. Châssis monocoque carbone, vectorisation de couple intégrale et aérodynamique active inspirée de la F1.",
  },
  {
    id: 'elysium',
    name: 'Elysium Grand Tourer',
    price: '210 000 €',
    power: '890 ch',
    acceleration: '0-100 km/h en 2,4 s',
    range: '980 km',
    topSpeed: '360 km/h',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1498887985582-791d9abb7d79?auto=format&fit=crop&w=1600&q=80'
    ],
    description:
      "Le grand tourisme réinventé : quatre places enveloppantes, cockpit holographique et conduite autonome niveau 4. Le confort absolu sans sacrifier la vitesse.",
  },
  {
    id: 'nova-r',
    name: 'Nova R Track Edition',
    price: '185 000 €',
    power: '740 ch',
    acceleration: '0-100 km/h en 2,7 s',
    range: '640 km',
    topSpeed: '340 km/h',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1518552781804-450675335c69?auto=format&fit=crop&w=1600&q=80'
    ],
    description:
      "Version piste homologuée route, dotée d'un système aérodynamique actif et d'un pack track exclusif pour des sensations pures et maîtrisées.",
  },
  {
    id: 'zenith',
    name: 'Zenith Aero Concept',
    price: 'Sur demande',
    power: '1 050 ch',
    acceleration: '0-100 km/h en 2,1 s',
    range: '900 km',
    topSpeed: '390 km/h',
    image: 'https://images.unsplash.com/photo-1518552781804-450675335c69?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80'
    ],
    description:
      "Une pièce de collection aux lignes futuristes, dotée d'un moteur hybride hydrogène-électrique et d'une interface conducteur augmentée par IA.",
  },
];
