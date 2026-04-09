import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        desert: {
          50:  '#FDF8F0',
          100: '#F5E6C8',
          200: '#E8D0A0',
          300: '#D4B478',
          400: '#C4903A',
          500: '#B07A25',
          600: '#8A5E18',
          700: '#6B4610',
          800: '#4A2E08',
          900: '#2D1A04',
          950: '#1A0E02',
        },
        sand: {
          100: '#FAF3DC',
          200: '#F0DFB0',
          300: '#E8C87A',
          400: '#D4A843',
          500: '#BA8C28',
          600: '#9A7020',
        },
        dune: {
          light: '#E8D5A3',
          mid:   '#C9A96E',
          dark:  '#8B6B3D',
          deep:  '#3D2010',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-jost)', 'system-ui', 'sans-serif'],
        arabic:  ['var(--font-amiri)', 'Georgia', 'serif'],
      },
      animation: {
        'shimmer':    'shimmer 3s linear infinite',
        'float':      'float 6s ease-in-out infinite',
        'scan':       'scanLine 6s linear infinite',
        'spin-slow':  'spin 30s linear infinite',
        'fade-up':    'fadeUp 0.9s ease-out forwards',
        'particle':   'particleDrop var(--duration,10s) var(--delay,0s) ease-in infinite',
      },
      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        scanLine: {
          '0%':   { top: '-2px' },
          '100%': { top: '100%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        particleDrop: {
          '0%':   { opacity: '0',   transform: 'translateY(-10px)' },
          '10%':  { opacity: '0.8' },
          '90%':  { opacity: '0.5' },
          '100%': { opacity: '0',   transform: 'translateY(600px) translateX(var(--drift, 30px))' },
        },
      },
    },
  },
  plugins: [],
}

export default config
