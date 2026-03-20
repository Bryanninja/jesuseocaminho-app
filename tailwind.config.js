/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        plan: {
          'light-black': '#2B2B2B',
          'green-brand': '#69BB8A',
          'green-primary': '#68BA6D',
          'green-yellow': '#84BA68',
          'green-opaque': '#A6BAAE',
          'blue-green': '#68BAA5',
          'blue-light-green': '#68B4BA',
          'black-text': '#3F3F3F',
          'surface-black': '#333333',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(to bottom, #68BA6D, #69BB8A, #84BA68, #68BAA5)',
      },

      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
