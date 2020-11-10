const { colors, fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {

      fontFamily: {
        ...fontFamily,
        'sans' : ['Bw Modelica', 'sans-serif']
      },

      colors: {
        ...colors,
        
          gray: {
            ...colors.gray,
            '100' : '#F2F7F9',
            '800' : '#212B30'
          }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
