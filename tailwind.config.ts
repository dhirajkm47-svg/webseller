import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffe4e6',
          500: '#ff2424',
          600: '#e50914', // Reference Alpha Crimson Red
          700: '#c80710',
          800: '#a30810',
          900: '#7f080e',
          accent: '#FF1E27',
          glow: '#FF3B44',
        },
        dark: {
          bg: '#09090b', // Deep Matte Obsidian
          surface: '#111115',
          card: '#15151a',
          cardHover: '#1c1c22',
          border: '#23232a',
          borderLight: '#2e2e38',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 0 35px -5px rgba(229, 9, 20, 0.4)',
        'card-glow': '0 0 25px -5px rgba(229, 9, 20, 0.25)',
      },
      borderRadius: {
        'pill': '9999px',
      }
    },
  },
  plugins: [],
};
export default config;
