
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'principal': '#231942',
        'paleta2': '#5e548e',
        'paleta3': '#9f86c0',
        'paleta4': '#be95c4',
        'paleta5': '#e0b1cb',
        'paleta6': '#160e2e',
      },
    }
  },
variants: {
  extend: { },
},
plugins: [],
}