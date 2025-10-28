import { MiniLogoCarousel } from '../components/reactbits/MiniLogoCarousel';
import { footerLogos } from '../data/page';

export function FooterSection() {
  return (
    <footer id="footer" className="relative mt-40 bg-night px-6 pb-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] border border-white/10 bg-[#10141c] p-12">
        <div className="relative rounded-[2.5rem] border border-white/10 bg-steel/70 p-8 text-center" style={{ clipPath: 'ellipse(85% 100% at 50% 50%)' }}>
          <h3 className="font-display text-2xl text-chrome">Restez dans la voie rapide</h3>
          <p className="mt-3 text-sm text-chrome/70">Abonnez-vous pour recevoir les alertes track days, playlists moteur et bons plans garage.</p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-full border border-white/10 bg-night/70 px-6 py-3 text-sm text-chrome placeholder:text-chrome/40 focus:border-accent focus:outline-none sm:w-80"
              placeholder="votre@email.com"
            />
            <button
              type="submit"
              className="rounded-full border border-accent/40 bg-accent/80 px-6 py-3 text-sm font-medium text-night transition-colors hover:bg-accent"
            >
              S’abonner
            </button>
          </form>
        </div>
        <div className="mt-12">
          <MiniLogoCarousel logos={footerLogos} />
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="space-y-3 text-sm text-chrome/60">
            <div className="font-display text-xl text-chrome">RevPulse Garage</div>
            <p>Club digital né entre Paris et Montréal pour connecter pilotes, collectionneurs et artisans d’exception.</p>
          </div>
          <div className="text-sm text-chrome/60">
            <div className="font-medium uppercase tracking-[0.35em] text-chrome/40">Navigation</div>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#hero" className="hover:text-accent">
                  Club
                </a>
              </li>
              <li>
                <a href="#showroom" className="hover:text-accent">
                  Machines
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-accent">
                  Journal
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm text-chrome/60">
            <div className="font-medium uppercase tracking-[0.35em] text-chrome/40">Contact</div>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="mailto:crew@revpulse.garage" className="hover:text-accent">
                  crew@revpulse.garage
                </a>
              </li>
              <li>
                <a href="#cta" className="hover:text-accent">
                  Demander une invitation
                </a>
              </li>
              <li className="flex gap-3 text-base">
                <a href="#" aria-label="Instagram" className="hover:text-accent">
                  ⓘ
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-accent">
                  Ⓛ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-chrome/40">© {new Date().getFullYear()} RevPulse Garage — Mentions & confidentialité.</p>
      </div>
    </footer>
  );
}
