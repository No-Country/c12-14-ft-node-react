/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // colors: {
    //   white: '#FAFAFA',
    //   black: '#323238',
    //   purple: '#6C33F2',
    //   darkpurple: '#29278D',
    //   navbar: '#FEFDDFD',
    //   border: '#5526b378',
    //   container: '#FFFFFF',
    //   gradient: 'linear-gradient(155deg, #29278D 0%, #6D11CC 100%);',
    //   transparent: 'transparent',
    // },
    fontFamily: {
      landing: ['Source Sans 3', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#6C33F2',
        primaryDark: '#29278D',
        secondaryBackground: '#FAFAFA',
        secondaryContainer: '#FFFFFF',
        secondaryNav: '#FEFDFD',
        secondaryContainerBorder: '#5526B366',
        secondaryText: '#323238',
      },
    },
  },
  plugins: [],
}
