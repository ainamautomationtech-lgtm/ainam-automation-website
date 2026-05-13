/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#06060c',
          800: '#0a0a14',
          700: '#0e0e1c',
          600: '#13132a',
          500: '#1a1a32',
        },
        gold: {
          300: '#F6DBA0',
          400: '#EFC373',
          500: '#E5A94A',
          600: '#C68A2D',
        },
        azure: {
          300: '#8FD0FF',
          400: '#5BB2FF',
          500: '#3A8FFF',
          600: '#2868D6',
        },
        violet: {
          400: '#B89DFF',
          500: '#8A6CFF',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
