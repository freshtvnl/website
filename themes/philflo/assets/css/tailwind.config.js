const { colors, fontFamily, maxWidth } = require('tailwindcss/defaultTheme')


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

      maxWidth: {
        ...maxWidth,
        'screen-2xl': "1600px"
      },

      fontFamily: {
        ...fontFamily,
        'sans' : ['Bw Modelica', 'sans-serif']
      },

      colors: {
        ...colors,

          blue: {
            ...colors.blue,
            '500' : '#1572CE'
          },

          green: {
            ...colors.green,
            '400' : "#6fbc95",
            '500' : "#007f66",
          },
        
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
