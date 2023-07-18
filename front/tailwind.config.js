/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      landing: ['Source Sans 3', 'sans-serif'],
    },
    extend: {
      colors: {
        gradient: 'linear-gradient(155deg, #29278D 0%, #6D11CC 100%);',
        authGradient: 'linear-gradient(161.27deg, #25095E -14%, #37049D 46.03%, #61268F 109.14%)',
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
