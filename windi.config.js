import { defineConfig } from 'windicss/helpers'
// import colors from 'windicss/colors'
// import plugin from 'windicss/plugin'

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {

    extend: {
      fontFamily: {
        body: ['Gotham', 'Helvetica', 'Arial', 'sans-serif']
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      },
      colors: {
        blue: '#005CAA',
        red: '#D41217',
        beige: '#F8F6F3'
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      }

    }
  },
  plugins: [

    require('windicss/plugin/forms'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/line-clamp')

  ]
})
