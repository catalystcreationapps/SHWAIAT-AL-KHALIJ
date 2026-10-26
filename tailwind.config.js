/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#060504',
          900: '#0c0a09',
          850: '#120f0d',
          800: '#181411',
          700: '#27201b',
          600: '#3a3029',
        },
        espresso: {
          DEFAULT: '#1c1512',
          light: '#2a1f1b',
        },
        ember: {
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          glow: 'rgba(234, 88, 12, 0.35)',
        },
        saffron: {
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
        },
        gold: {
          light: '#f5dfa8',
          DEFAULT: '#d4af37',
          dark: '#a88922',
          hairline: 'rgba(212, 175, 55, 0.2)',
        },
        cream: {
          DEFAULT: '#faf6ee',
          pure: '#ffffff',
          muted: '#d6cebf',
          dim: '#9e9584',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        arabicSerif: ['"Amiri"', 'serif'],
        arabicSans: ['"Cairo"', '"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      boxShadow: {
        'ember-sm': '0 0 15px rgba(234, 88, 12, 0.15)',
        'ember-lg': '0 0 35px rgba(234, 88, 12, 0.25)',
        'gold-sm': '0 0 15px rgba(212, 175, 55, 0.15)',
        'gold-glow': '0 0 30px rgba(212, 175, 55, 0.25)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
