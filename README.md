# LuxDrive — Showroom Automobile Immersif

LuxDrive est une expérience web premium développée avec React, TypeScript, Tailwind CSS et Framer Motion. L'interface met en scène un showroom automobile futuriste en quatre sections : hero immersif, sélection de modèles, focus technologie & design et réservation d'essai.

## Pile technique

- **Framework** : React 18 + Vite
- **Langage** : TypeScript strict
- **Styling** : Tailwind CSS, design system glossy / néon
- **Animations** : Framer Motion, effets parallax et motion 3D
- **3D temps réel** : React Three Fiber + Drei
- **Formulaires** : React Hook Form + Zod
- **Carte** : React Leaflet (fond sombre Jawg)

## Démarrage

```bash
npm install
npm run dev
```

Le serveur de développement est disponible sur [http://localhost:5173](http://localhost:5173).

## Scripts

- `npm run dev` : lance le serveur Vite
- `npm run build` : compile TypeScript et génère le build de production
- `npm run preview` : prévisualise le build

## Structure des dossiers

```
src/
├─ components/
│  ├─ reactbits/    # Composants inspirés de ReactBits (Hero parallax, buttons, cards, etc.)
│  └─ LogoReveal.tsx
├─ data/            # Données statiques (modèles, innovations)
├─ sections/        # Sections principales de la page
├─ styles/          # Fichiers Tailwind globaux
├─ App.tsx          # Composition des sections
└─ main.tsx         # Point d'entrée Vite
```

## Design system

- Palette : `#0A0A0A` (Night), `#1F1F1F` (Steel), `#00C2FF` (Neon), `#E63946` (Engine), `#FAFAFA` (Chrome)
- Typographies Google Fonts : Orbitron, Rajdhani, Anton, Inter
- Motions : reveal progressifs, parallax scroll, hover 3D, transitions fluides

## Accessibilité & SEO

- Structure sémantique et attributs ARIA sur les composants interactifs
- Vidéo hero accessible (muted/autoplay) avec image poster fallback
- Meta description et polices chargées en amont

## Déploiement

Construisez le projet puis servez le dossier `dist/` via un hébergeur statique (Vercel, Netlify, Cloudflare Pages...).
