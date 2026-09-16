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
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#9B82FF',
          500: '#7A5CFF', // Primary InstaFlow Purple Accent
          600: '#6344E7',
          700: '#4f35b8',
          800: '#3c288c',
          900: '#2b1d63',
          blue: '#3B82F6', // Secondary Blue Accent
          accent: '#7A5CFF',
          glow: '#7A5CFF',
        },
        dark: {
          bg: '#0B0B0F', // Primary Deep Onyx
          surface: '#101014', // Secondary Surface
          card: '#141419', // Card Surface
          cardHover: '#18181F',
          elevated: '#18181F', // Elevated Surface
          border: 'rgba(255, 255, 255, 0.08)',
          borderLight: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 0 30px -4px rgba(122, 92, 255, 0.45)',
        'card-glow': '0 0 25px -5px rgba(122, 92, 255, 0.25)',
        'btn-glow': '0 0 25px -3px rgba(122, 92, 255, 0.45)',
      },
      borderRadius: {
        'pill': '9999px',
      }
    },
  },
  plugins: [],
};
export default config;
