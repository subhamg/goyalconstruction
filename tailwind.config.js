module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gc: {
          primary: '#fbd472',
          black: '#282d3f',
          'primary-light': '#fbf8ed',
          'white-shade': '#fdfdff',
          grey: '#BDC1CB'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      // backgroundImage: {
      //   'gradient': 'linear-gradient(#fbf8ed, #fdfdff)'
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ]
}