/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
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
