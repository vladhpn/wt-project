/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cl-main': '#5F6D7E',
        'cl-main-bg': '#F1F2F3',
        'cl-title': '#000000',
        'cl-accent': '#CA9FD1',
        'cl-secondary': '#FFFFFF',
        'cl-success': '#22c55e',
        'cl-info': '#eab308',
        'cl-error': '#ef4444',
      },
    },
  },
  plugins: ['postcss-import', 'autoprefixer'],
};
