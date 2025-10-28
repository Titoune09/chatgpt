export const navLinks = [
  { href: '#hero', label: 'Immersion', icon: '🌌' },
  { href: '#narrative-nav', label: 'Navigation', icon: '🧭' },
  { href: '#arguments', label: 'Pourquoi nous', icon: '⚡️' },
  { href: '#showroom', label: 'Showroom', icon: '🚗' },
  { href: '#gallery', label: 'Galaxie', icon: '🪐' },
  { href: '#processus', label: 'Process', icon: '🧬' },
  { href: '#technos', label: 'Technos', icon: '🛠️' },
  { href: '#temoignages', label: 'Avis', icon: '💬' },
  { href: '#cta', label: 'Action', icon: '🚀' },
  { href: '#blog', label: 'Ressources', icon: '📚' },
  { href: '#footer', label: 'Contact', icon: '📞' },
];

export const heroContent = {
  title: 'Propulsez votre expérience\nen dehors des courbes attendues',
  subtitle: "Une plateforme immersive qui fusionne narration, interactivité et performance pour vos produits signature.",
  ctas: [
    { label: 'Lancer la mission', href: '#cta', primary: true },
    { label: 'Voir la démo', href: '#showroom', primary: false },
  ],
};

export const uspList = [
  {
    title: 'Narrative Flow',
    description: 'Orchestration serpentine de contenu pour ancrer la compréhension et réduire le churn exploratoire.',
    icon: '🌀',
  },
  {
    title: 'Cinematic Layers',
    description: 'Plans superposés, parallaxe contrôlée et focus dynamique pour capter l’attention dès la première seconde.',
    icon: '🎬',
  },
  {
    title: 'Hyper-personnalisation',
    description: 'Cartographie du parcours utilisateur alimentée par la data pour déclencher les bons signaux au bon moment.',
    icon: '🧠',
  },
  {
    title: 'Conversion tactile',
    description: 'Gestuelles naturelles, drags contrôlés et feedback haptiques visuels pour transformer l’engagement en action.',
    icon: '🤲',
  },
  {
    title: 'Accessibilité renforcée',
    description: 'Contraste élevé, commandes vocales optionnelles et logique DOM linéaire pour tous les visiteurs.',
    icon: '♿️',
  },
  {
    title: 'Ops et performance',
    description: 'Chargements paresseux, paquets fractionnés et animations décélérées sur mobile pour garder le site vif.',
    icon: '⚙️',
  },
  {
    title: 'Sécurité intégrée',
    description: 'Audit continu, stockage chiffré et surveillance proactive pour vos données critiques.',
    icon: '🛡️',
  },
];

export const showroomItems = [
  {
    id: 'nova-serie',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    title: 'Nova Série R',
    tags: ['IA embarquée', 'Pilotage autonome', 'Intérieurs luminescents'],
    specs: '0-100 km/h en 2,9 s · 1 000 km d’autonomie · Cockpit holo réactif',
  },
  {
    id: 'halo-concept',
    image: 'https://images.unsplash.com/photo-1511390424010-9ef73e825d9c?auto=format&fit=crop&w=900&q=80',
    title: 'Halo Concept',
    tags: ['Edition limitée', 'Matériaux composites', 'Phares spectra'],
    specs: 'Signature lumineuse 360° · suspension active · modules audio spatialisés',
  },
  {
    id: 'pulse-gt',
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=900&q=80',
    title: 'Pulse GT',
    tags: ['Track Ready', 'Vector Drive', 'Biofeedback'],
    specs: 'Vectorisation 4 roues · mode piste prédictif · interface biométrique',
  },
  {
    id: 'elysium-air',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80',
    title: 'Elysium Air',
    tags: ['SUV coupé', 'Energie pure', 'Confort nébuleux'],
    specs: 'Toit panoramique actif · filtration ionique · navigation multi-sensorielle',
  },
];

export const showroomCarousel = showroomItems.map((item) => ({
  id: item.id,
  image: item.image,
  title: item.title,
  description: item.specs,
}));

export const circularGalleryItems = [
  {
    id: 'orbit-1',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=800&q=80',
    label: 'Générateur solaire',
  },
  {
    id: 'orbit-2',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    label: 'Interface halo',
  },
  {
    id: 'orbit-3',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    label: 'Cluster de données',
  },
  {
    id: 'orbit-4',
    image: 'https://images.unsplash.com/photo-1500043201527-395c95a0ea9b?auto=format&fit=crop&w=800&q=80',
    label: 'Atelier immersif',
  },
  {
    id: 'orbit-5',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    label: 'Laboratoire IA',
  },
  {
    id: 'orbit-6',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
    label: 'Expérience tactile',
  },
];

export const processSteps = [
  {
    id: 'immersion',
    title: 'Immersion stratégique',
    description: 'Workshops avec vos équipes pour tracer la sinusoïde narrative et définir les jalons émotionnels.',
    icon: '🔭',
  },
  {
    id: 'prototypage',
    title: 'Prototypage multi-sens',
    description: 'Wireflows organiques, maquettes motion et prototypes tactiles prêts pour tests.',
    icon: '🧪',
  },
  {
    id: 'production',
    title: 'Production cinétique',
    description: 'Déploiement React + WebGL, intégration des composants ReactBits optimisés, QA multi-device.',
    icon: '🛠️',
  },
  {
    id: 'lancement',
    title: 'Lancement orbital',
    description: 'Monitoring en direct, outils de mesure intégrés et tuning des animations post-lancement.',
    icon: '🚀',
  },
  {
    id: 'growth',
    title: 'Growth continu',
    description: 'Analyse data-driven, A/B tests cinétiques et roadmap d’amélioration perpétuelle.',
    icon: '📈',
  },
];

export const technoCards = [
  {
    icon: '⚛️',
    title: 'React 18 + Server Islands',
    description: 'Hydratation ciblée et streaming pour des pages ultra-rapides, même avec des animations riches.',
    link: 'https://react.dev/',
  },
  {
    icon: '💠',
    title: 'Framer Motion 11',
    description: 'Timeline avancée, gestures fluides et orchestration multi-couches sans compromis.',
    link: 'https://www.framer.com/motion/',
  },
  {
    icon: '🌫️',
    title: 'Tailwind CSS 3',
    description: 'Design system organique et tokens modulables pour sculpter chaque courbe.',
    link: 'https://tailwindcss.com/',
  },
  {
    icon: '🛰️',
    title: 'ReactBits',
    description: 'Bibliothèque de micro-interactions premium, adaptée pour l’ultra expressivité.',
    link: 'https://github.com/',
  },
];

export const testimonials = [
  {
    id: '1',
    quote: '« Une expérience qui a transformé notre funnel : +42% de conversion sur les démos interactives. »',
    author: 'Diane Morel',
    role: 'Chief Experience Officer, Neoterra',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
  },
  {
    id: '2',
    quote: '« Les équipes ont livré un design sinusoïdal qui nous différencie radicalement du marché. »',
    author: 'Léo Marchal',
    role: 'VP Produit, VoltEdge',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
  {
    id: '3',
    quote: '« Chaque interaction est millimétrée, accessible et performante, même sur mobile. »',
    author: 'Sofia Ben',
    role: 'Directrice Digitale, Polaris Labs',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 4,
  },
];

export const blogPosts = [
  {
    id: 'post-1',
    title: 'Designer une hero curve immersive',
    excerpt: 'Nos secrets pour sculpt­er un bandeau d’ouverture courbe qui embarque l’utilisateur en 3 secondes.',
    readingTime: '6 min',
    tags: ['Hero', 'Motion'],
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'post-2',
    title: 'Créer un ruban de preuves sociales vivant',
    excerpt: 'Comment nous avons combiné Bounce Cards et Animated List pour un impact maximal.',
    readingTime: '5 min',
    tags: ['Social proof', 'ReactBits'],
    image: 'https://images.unsplash.com/photo-1523475472560-3f66bd4769ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'post-3',
    title: 'Optimiser les parallaxes pour le mobile',
    excerpt: 'Guidelines et heuristiques pour doser les effets et préserver la performance tactile.',
    readingTime: '8 min',
    tags: ['Performance', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=900&q=80',
  },
];

export const footerLogos = [
  { id: 'partner-1', src: 'https://dummyimage.com/100x40/7bdff2/0f1115&text=Nova', alt: 'Nova' },
  { id: 'partner-2', src: 'https://dummyimage.com/100x40/f09d51/0f1115&text=Halo', alt: 'Halo' },
  { id: 'partner-3', src: 'https://dummyimage.com/100x40/ffffff/0f1115&text=Pulse', alt: 'Pulse' },
  { id: 'partner-4', src: 'https://dummyimage.com/100x40/7bdff2/0f1115&text=Orbit', alt: 'Orbit' },
];
