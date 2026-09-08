/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'abss-surface': '#f7f6f2',
        'abss-surface-muted': '#ece9e1',
        'abss-dark': '#1b211d',
        'abss-dark-surface': '#202a24',
        'abss-red': '#d9282f',
        'abss-red-hover': '#b71920',
        'abss-border': '#dedbd2',
        'abss-text': '#202322',
        'abss-muted': '#696e69',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
