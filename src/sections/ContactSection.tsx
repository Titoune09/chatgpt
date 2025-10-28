import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { GlowingButton } from '../components/reactbits/GlowingButton';
import { GlassCard } from '../components/reactbits/GlassCard';

const formSchema = z.object({
  name: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(8, 'Téléphone requis'),
  model: z.string(),
  message: z.string().min(10, 'Merci de préciser votre demande'),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { model: 'Hydra X Hyperion' },
  });

  const icon = useMemo(
    () =>
      new Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854929.png',
        iconSize: [40, 40],
      }),
    []
  );

  const onSubmit = (data: FormData) => {
    console.table(data);
    reset();
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-6 py-24">
      <GlassCard className="grid gap-12 p-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <span className="text-xs uppercase tracking-[0.5em] text-chrome/50">Réserver un essai</span>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.3em]">Entrer dans la légende</h2>
          <p className="mt-4 text-sm text-chrome/60">
            Sélectionnez votre modèle, définissez vos attentes et notre concierge vous recontactera en priorité pour une expérience personnalisée.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
            {[
              { label: 'Nom complet', field: 'name', type: 'text', placeholder: 'Neo Horizon' },
              { label: 'Email', field: 'email', type: 'email', placeholder: 'neo@luxdrive.com' },
              { label: 'Téléphone', field: 'phone', type: 'tel', placeholder: '+33 6 12 34 56 78' },
            ].map(({ label, field, type, placeholder }) => (
              <div key={field}>
                <label className="text-xs uppercase tracking-[0.4em] text-chrome/50">{label}</label>
                <input
                  {...register(field as keyof FormData)}
                  type={type}
                  placeholder={placeholder}
                  className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-chrome outline-none transition focus:border-neon focus:shadow-neon"
                />
                {errors[field as keyof FormData] && (
                  <p className="mt-2 text-xs text-engine">{errors[field as keyof FormData]?.message}</p>
                )}
              </div>
            ))}

            <div>
              <label className="text-xs uppercase tracking-[0.4em] text-chrome/50">Modèle</label>
              <select
                {...register('model')}
                className="mt-2 w-full rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-chrome outline-none transition focus:border-neon focus:shadow-neon"
              >
                <option>Hydra X Hyperion</option>
                <option>Elysium Grand Tourer</option>
                <option>Nova R Track Edition</option>
                <option>Zenith Aero Concept</option>
              </select>
            </div>

            <div>
              <label className="text-xs uppercase tracking-[0.4em] text-chrome/50">Message</label>
              <textarea
                {...register('message')}
                placeholder="Décrivez votre expérience idéale"
                className="mt-2 min-h-[140px] w-full rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-chrome outline-none transition focus:border-neon focus:shadow-neon"
              />
              {errors.message && <p className="mt-2 text-xs text-engine">{errors.message.message}</p>}
            </div>

            <GlowingButton type="submit" className="w-full justify-center">
              Réserver un essai
            </GlowingButton>

            {isSubmitSuccessful && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-between rounded-2xl border border-neon/40 bg-neon/10 px-4 py-3 text-sm text-neon"
              >
                <span>Demande envoyée. Notre équipe vous contacte sous 24h.</span>
                <span role="img" aria-label="check">
                  ✅
                </span>
              </motion.div>
            )}
          </form>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="space-y-6">
          <div className="h-80 overflow-hidden rounded-[2.5rem] border border-white/10">
            <MapContainer center={[48.8566, 2.3522]} zoom={12} style={{ height: '100%', width: '100%' }} zoomControl={false} scrollWheelZoom={false}>
              <TileLayer url="https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=4C2YroIcP8dAfnBTfVLHpQnKc5hyeqG5fsT5" />
              <Marker position={[48.8566, 2.3522]} icon={icon}>
                <Popup>LuxDrive HQ — Paris Hyperloop Hub</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-chrome/60">
            <p className="uppercase tracking-[0.4em] text-chrome/40">Conciergerie 24/7</p>
            <p className="mt-2">+33 1 88 88 88 88 · concierge@luxdrive.com</p>
            <p className="mt-2 text-chrome/40">Visites privées sur rendez-vous uniquement.</p>
          </div>
        </motion.div>
      </GlassCard>
    </section>
  );
}
