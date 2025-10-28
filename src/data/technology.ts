export type Innovation = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  media: string;
};

export const innovations: Innovation[] = [
  {
    id: 'motor',
    title: 'Motorisation & Performance',
    subtitle: 'Quad-Motor Vector Drive',
    description:
      'Quatre moteurs synchronisés, refroidissement liquide cryogénique et algorithme de vectorisation dynamique pour une motricité parfaite en toute situation.',
    media: 'https://assets.mixkit.co/videos/preview/mixkit-car-engine-rotating-31-large.mp4',
  },
  {
    id: 'cockpit',
    title: 'Cockpit & Interface',
    subtitle: 'HoloSync UI 360°',
    description:
      'Interface holographique tactile, retours haptiques et assistant vocal neuronal. Votre cockpit devient une extension intuitive de vos intentions.',
    media: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
  },
  {
    id: 'sustainability',
    title: 'Durabilité & Innovation',
    subtitle: 'Materials Beyond Carbon',
    description:
      'Nanocomposites recyclables, batteries à électrolyte solide et chaîne de production neutre en carbone. La performance durable devient la norme.',
    media: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
  },
];
