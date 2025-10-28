# Overdrive Society

Site vitrine immersif pour passionnés francophones de voitures d'exception. L'expérience repose sur une application React sans
build step qui présente les collections, expériences et services du club Overdrive.

## Démarrer

Ouvrez simplement `index.html` dans un navigateur moderne. Les dépendances React sont chargées via CDN et le code JSX est
transpilé à la volée grâce à Babel Standalone.

## Caractéristiques

- Hero dynamique qui alterne automatiquement trois hypercars exclusives.
- Sélecteur interactif des collections avec prévisualisation visuelle et accents dynamiques.
- Sections animées (IntersectionObserver) pour les expériences, l'atelier signature, l'agenda et la galerie.
- Formulaire d'invitation avec mise en avant des services membres.
- Commutation clair/sombre basée sur les préférences système et commande utilisateur.

## Déploiement sur Vercel

1. Installez l'interface de ligne de commande Vercel et authentifiez-vous : `npm i -g vercel && vercel login`.
2. Depuis la racine du projet (`index.html`, `styles.css`, `script.js`), exécutez `vercel` pour créer un premier déploiement.
3. Lors de l'initialisation, choisissez **Framework: Other** afin d'utiliser la configuration statique fournie.
4. Le fichier [`vercel.json`](./vercel.json) force l'utilisation du build statique et redirige toute route côté client vers `index.html`, ce qui permet à l'application React monopage de fonctionner avec le routage personnalisé.
5. Pour publier automatiquement les futures mises à jour, connectez le dépôt à Vercel : chaque push sur la branche principale déclenchera un nouveau déploiement.
