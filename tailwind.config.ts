import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0f1115',
        steel: '#161a23',
        slate: '#1d222c',
        sand: '#f4ede2',
        accent: '#7bdff2',
        ember: '#f09d51',
        chrome: '#f8fafc',
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Rajdhani"', ...fontFamily.sans],
        sans: ['Inter', ...fontFamily.sans],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(123, 223, 242, 0.35), transparent 55%), radial-gradient(circle at bottom, rgba(240, 157, 81, 0.2), transparent 60%)',
      },
      boxShadow: {
        halo: '0 20px 45px rgba(15, 17, 21, 0.4)',
        subtle: '0 12px 30px rgba(12, 14, 18, 0.28)',
      },
    },
  },
  plugins: [],
} satisfies Config;
