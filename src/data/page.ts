export const navLinks = [
  { href: '#hero', label: 'Club', description: 'Vision' },
  { href: '#arguments', label: 'Manifesto', description: 'Pourquoi nous rejoindre' },
  { href: '#showroom', label: 'Machines', description: 'Expériences phares' },
  { href: '#gallery', label: 'Moments', description: 'Temps forts' },
  { href: '#processus', label: 'Programme', description: 'Parcours membre' },
  { href: '#technos', label: 'Modules', description: 'Outils exclusifs' },
  { href: '#temoignages', label: 'Membres', description: 'Retours pilotes' },
  { href: '#cta', label: 'Inscription', description: 'Rejoindre' },
  { href: '#blog', label: 'Journal', description: 'Articles garage' },
  { href: '#footer', label: 'Contact', description: 'Coordonnées' },
];

export const heroContent = {
  highlight: 'La communauté immersive des passionné·e·s d’automobile',
  title: 'Revivez les sensations du paddock\ndans un garage digital vivant',
  subtitle:
    "RevPulse Garage centralise briefings circuits, feuille de route événements et streaming des machines iconiques pour que la passion reste plein régime.",
  ctas: [
    { label: 'Rejoindre le paddock', href: '#cta', primary: true },
    { label: 'Explorer les machines', href: '#showroom', primary: false },
  ],
  metrics: [
    { value: '12K', label: 'Membres actifs', detail: 'Pilotes, photographes et préparateurs partagent leurs sessions.' },
    { value: '68', label: 'Evénements/an', detail: 'Rallyes privés, track days et masterclasses streaming.' },
    { value: '4.9/5', label: 'Satisfaction', detail: 'Note moyenne des clubs partenaires sur les expériences RevPulse.' },
  ],
};

export const uspList = [
  {
    title: 'Briefings circuits',
    description: 'Plans de piste interactifs, conseils de trajectoire et météo live avant chaque session.',
    category: 'Track',
  },
  {
    title: 'Dossiers machines',
    description: 'Fiches immersives avec télémétrie, bandes-son moteur et vues cockpit en 360°.',
    category: 'Garage',
  },
  {
    title: 'Matchmaking passion',
    description: 'Algorithme qui connecte pilotes, copilotes et photographes selon affinités et localisation.',
    category: 'Communauté',
  },
  {
    title: 'Live chronos',
    description: 'Classements partagés en temps réel et comparateur de tours intégrable depuis l’app mobile.',
    category: 'Performance',
  },
  {
    title: 'Accessibilité totale',
    description: 'Sous-titres dynamiques, contrastes renforcés et navigation clavier pour suivre chaque briefing.',
    category: 'Inclusif',
  },
  {
    title: 'Sécurité des données',
    description: 'Historique de runs chiffré, contrôle granularité des partages et double authentification.',
    category: 'Confiance',
  },
  {
    title: 'Support paddock',
    description: 'Coachs disponibles 24/7, assistance technique sur circuit et hotline pour évènements.',
    category: 'Service',
  },
];

export const showroomItems = [
  {
    id: 'nova-serie',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    title: 'Sprint R-12',
    tags: ['Track Day', 'Setup partagé', 'V8 atmos'],
    specs: 'Session Magny-Cours · fiche pressions pneus · onboard multi-cam synchronisé',
  },
  {
    id: 'halo-concept',
    image: 'https://images.unsplash.com/photo-1511390424010-9ef73e825d9c?auto=format&fit=crop&w=900&q=80',
    title: 'Night Run Concept',
    tags: ['Edition club', 'Wrap néon', 'Sound design'],
    specs: 'Roadbook de 180 km · playlist collaborative · points photo géolocalisés',
  },
  {
    id: 'pulse-gt',
    image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?auto=format&fit=crop&w=900&q=80',
    title: 'Pulse GT Heritage',
    tags: ['Chrono partagé', 'Analyse data', 'Coaching'],
    specs: 'Comparatif télémétrie vs coach · fiche upgrade freinage · mode pluie dédié',
  },
  {
    id: 'elysium-air',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80',
    title: 'Elysium Air Tourer',
    tags: ['Roadtrip', 'Confort', 'Famille'],
    specs: 'Itinéraire Alpes · hôtels partenaires · brief sécurité passagers',
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
    label: 'Warm-up à Spa',
  },
  {
    id: 'orbit-2',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    label: 'Atelier detailing',
  },
  {
    id: 'orbit-3',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    label: 'Simulateur VR',
  },
  {
    id: 'orbit-4',
    image: 'https://images.unsplash.com/photo-1500043201527-395c95a0ea9b?auto=format&fit=crop&w=800&q=80',
    label: 'Session photo nocturne',
  },
  {
    id: 'orbit-5',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    label: 'Clubhouse Montréal',
  },
  {
    id: 'orbit-6',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
    label: 'Run matinal',
  },
];

export const processSteps = [
  {
    id: 'immersion',
    title: 'Diagnostic de passion',
    description: 'Onboarding vidéo pour comprendre vos attentes piste, voyage ou collection.',
    phase: 'Inscrire',
  },
  {
    id: 'prototypage',
    title: 'Sélection du programme',
    description: 'Choix assisté entre track days, roadtrips iconiques ou ateliers mécaniques.',
    phase: 'Choisir',
  },
  {
    id: 'production',
    title: 'Prépa machine & équipage',
    description: 'Checklist interactive, pairing copilote et briefing digital envoyé aux membres.',
    phase: 'Préparer',
  },
  {
    id: 'lancement',
    title: 'Jour J connecté',
    description: 'Live timing, push coaching et partage instantané des médias via l’app.',
    phase: 'Vivre',
  },
  {
    id: 'growth',
    title: 'Débrief & upgrades',
    description: 'Analyse télémétrie, recommandations mécaniques et invitations prioritaires.',
    phase: 'Progresser',
  },
];

export const technoCards = [
  {
    title: 'Garage Connect',
    description: 'Tableau de bord centralisé pour gérer vos voitures, calendriers de runs et carnets d’entretien.',
    badge: 'Plateforme',
    link: 'https://revpulse.garage',
  },
  {
    title: 'Live Timing RevPulse',
    description: 'Synchronise télémétrie, classements et replays cockpit sur tous vos écrans.',
    badge: 'Performance',
    link: 'https://revpulse.garage/timing',
  },
  {
    title: 'Audio Engine V12',
    description: 'Bibliothèque sonore haute fidélité pour revivre chaque montée en régime.',
    badge: 'Immersion',
    link: 'https://revpulse.garage/audio',
  },
  {
    title: 'Matchmaker Crew',
    description: 'IA maison qui compose équipages, choix de pneus et sessions photo parfaites.',
    badge: 'Communauté',
    link: 'https://revpulse.garage/crew',
  },
];

export const testimonials = [
  {
    id: '1',
    quote: '« RevPulse a transformé nos sorties circuit : briefings limpides, partage de télémétrie instantané. On roule plus serein. »',
    author: 'Diane Morel',
    role: 'Pilote GT4 — Crew Nova',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
  },
  {
    id: '2',
    quote: '« Le club nous ouvre des routes fermées et un réseau d’artisans qui bichonnent nos voitures comme des œuvres. »',
    author: 'Léo Marchal',
    role: 'Collectionneur — VoltEdge Classics',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
  {
    id: '3',
    quote: '« Même à distance je vis les track days : streams multi-cam et audio moteur immersif, accessibles avec synthèse vocale. »',
    author: 'Sofia Ben',
    role: 'Créatrice de contenu — Polaris Labs',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 4,
  },
];

export const blogPosts = [
  {
    id: 'post-1',
    title: '3 circuits mythiques à maîtriser cette saison',
    excerpt: 'Trajectoires illustrées, zones de freinage et playlists moteur pour entrer dans le flow.',
    readingTime: '6 min',
    tags: ['Track', 'Coaching'],
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'post-2',
    title: 'Préparer un roadtrip néon à travers l’Europe',
    excerpt: 'Checklists nuit, spots photo et partenaires detailing pour rouler en totale confiance.',
    readingTime: '5 min',
    tags: ['Roadtrip', 'Lifestyle'],
    image: 'https://images.unsplash.com/photo-1523475472560-3f66bd4769ea?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'post-3',
    title: 'Partager ses chronos sans perdre ses données',
    excerpt: 'Nos bonnes pratiques pour ouvrir vos runs tout en gardant le contrôle sur la confidentialité.',
    readingTime: '8 min',
    tags: ['Data', 'Sécurité'],
    image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=900&q=80',
  },
];

export const footerLogos = [
  { id: 'partner-1', src: 'https://dummyimage.com/100x40/7bdff2/0f1115&text=Club+GT', alt: 'Club GT' },
  { id: 'partner-2', src: 'https://dummyimage.com/100x40/f09d51/0f1115&text=TrackLab', alt: 'TrackLab' },
  { id: 'partner-3', src: 'https://dummyimage.com/100x40/ffffff/0f1115&text=Road+Neo', alt: 'Road Neo' },
  { id: 'partner-4', src: 'https://dummyimage.com/100x40/7bdff2/0f1115&text=Speed+FM', alt: 'Speed FM' },
];
