
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'principal': '#231942',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}