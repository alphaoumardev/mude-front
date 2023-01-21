/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require("tailwindcss/defaultTheme");
const windmill = require("@windmill/react-ui/config");

// module.exports = {
module.exports = windmill({

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],

  theme: {
    // fontFamily: {
    //   display: ['Open Sans', 'sans-serif'],
    //   body: ['Open Sans', 'sans-serif'],
    // },
    // extend: {
    //   fontFamily: {
    //     sans: ["Inter", ...defaultTheme.fontFamily.sans],
    //   },
    //   boxShadow: {
    //     bottom:
    //         "0 5px 6px -7px rgba(0, 0, 0, 0.6), 0 2px 4px -5px rgba(0, 0, 0, 0.06)",
    //   },
    // },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwindcss/colors'),
    require('tw-elements/dist/plugin')
  ],
})

