import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A0A0A',
        steel: '#1F1F1F',
        neon: '#00C2FF',
        engine: '#E63946',
        chrome: '#FAFAFA',
      },
      fontFamily: {
        display: ['"Orbitron"', '"Rajdhani"', '"Anton"', ...fontFamily.sans],
        sans: ['Inter', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(0, 194, 255, 0.35), transparent 55%), radial-gradient(circle at bottom, rgba(230, 57, 70, 0.25), transparent 60%)',
      },
      boxShadow: {
        neon: '0 0 25px rgba(0, 194, 255, 0.35)',
        glow: '0 0 45px rgba(230, 57, 70, 0.3)',
      },
      dropShadow: {
        chrome: '0 15px 25px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 12s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(0, 194, 255, 0)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 194, 255, 0.55)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(-1%)' },
          '50%': { transform: 'translateY(2%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
