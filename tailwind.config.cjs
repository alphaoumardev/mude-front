/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  // theme: {
  //   fontFamily: {
  //     display: ['Open Sans', 'sans-serif'],
  //     body: ['Open Sans', 'sans-serif'],
  //   },
  //   extend: {
  //     colors: {
  //       cyan: colors.cyan,
  //       'warm-gray': colors.warmGray,
  //       teal: colors.teal,
  //     },
  //     fontSize: {
  //       14: '14px',
  //     },
  //     backgroundColor: {
  //       'main-bg': '#FAFBFB',
  //       'main-dark-bg': '#20232A',
  //       'secondary-dark-bg': '#33373E',
  //       'light-gray': '#F7F7F7',
  //       'half-transparent': 'rgba(0, 0, 0, 0.5)',
  //     },
  //     borderWidth: {
  //       1: '1px',
  //     },
  //     borderColor: {
  //       color: 'rgba(0, 0, 0, 0.1)',
  //     },
  //     width: {
  //       400: '400px',
  //       760: '760px',
  //       780: '780px',
  //       800: '800px',
  //       1000: '1000px',
  //       1200: '1200px',
  //       1400: '1400px',
  //     },
  //     height: {
  //       80: '80px',
  //     },
  //     minHeight: {
  //       590: '590px',
  //     },
  //     backgroundImage: {
  //       'hero-pattern':
  //           "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
  //     },
  //   },
  // },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss/colors'),
    require('tw-elements/dist/plugin')
  ],
}

