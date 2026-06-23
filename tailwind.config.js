/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0d',
        surface: '#141414',
        border: '#222',
        accent: '#c8f135',
        accent2: '#f1c835',
        text: '#e8e4dc',
        muted: '#5a5a5a',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', '"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}
