/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    colors: {
      white: '#FAFAFA',
      black: '#323238',
      purple: '#6C33F2',
      darkpurple: '#29278D',
      navbar: '#FEFDDFD',
      border: '#5526b378',
      container: '#FFFFFF',
      gradient: 'linear-gradient(155deg, #29278D 0%, #6D11CC 100%);',
    },
    fontFamily: {
      landing: ['Source Sans 3', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
