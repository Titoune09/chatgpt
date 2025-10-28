import { lazy, Suspense } from 'react';
import { NavigationCrown } from './sections/NavigationCrown';
import { HeroCinematicSection } from './sections/HeroCinematicSection';
import { ArgumentsSection } from './sections/ArgumentsSection';
import { ShowroomPortfolioSection } from './sections/ShowroomPortfolioSection';

const CircularGallerySection = lazy(() => import('./sections/CircularGallerySection').then((module) => ({ default: module.CircularGallerySection })));
const ProcessSection = lazy(() => import('./sections/ProcessSection').then((module) => ({ default: module.ProcessSection })));
const TechnologiesSection = lazy(() => import('./sections/TechnologiesSection').then((module) => ({ default: module.TechnologiesSection })));
const TestimonialsSection = lazy(() => import('./sections/TestimonialsSection').then((module) => ({ default: module.TestimonialsSection })));
const CTASection = lazy(() => import('./sections/CTASection').then((module) => ({ default: module.CTASection })));
const BlogSection = lazy(() => import('./sections/BlogSection').then((module) => ({ default: module.BlogSection })));
const FooterSection = lazy(() => import('./sections/FooterSection').then((module) => ({ default: module.FooterSection })));

export default function App() {
  return (
    <div className="relative min-h-screen bg-night text-chrome">
      <NavigationCrown />
      <main className="relative">
        <HeroCinematicSection />
        <ArgumentsSection />
        <ShowroomPortfolioSection />
        <Suspense fallback={<div className="mx-auto mt-40 max-w-6xl px-6 text-center text-sm text-chrome/40">Chargement des expériences immersives…</div>}>
          <CircularGallerySection />
          <ProcessSection />
          <TechnologiesSection />
          <TestimonialsSection />
          <CTASection />
          <BlogSection />
          <FooterSection />
        </Suspense>
      </main>
    </div>
  );
}
