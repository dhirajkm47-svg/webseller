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
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00C6FF', // Exact InstaFlow Vibrant Cyan
          600: '#0066FF', // Exact InstaFlow Cobalt Blue
          700: '#0052cc',
          800: '#003d99',
          900: '#002966',
          cyan: '#00C6FF',
          blue: '#0066FF',
          accent: '#00C6FF',
          glow: '#00C6FF',
        },
        dark: {
          bg: '#050B18', // Exact InstaFlow Deep Midnight Navy Canvas
          surface: '#091124', // Secondary Surface
          card: '#0D1730', // Card Surface
          cardHover: '#111F42',
          elevated: '#14254D', // Elevated Surface
          border: 'rgba(0, 163, 255, 0.12)',
          borderLight: 'rgba(0, 163, 255, 0.22)',
        }
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'brand-glow': '0 0 30px -4px rgba(0, 198, 255, 0.5)',
        'card-glow': '0 0 25px -5px rgba(0, 102, 255, 0.3)',
        'btn-glow': '0 0 25px -2px rgba(0, 198, 255, 0.55)',
      },
      borderRadius: {
        'pill': '9999px',
      }
    },
  },
  plugins: [],
};
export default config;
