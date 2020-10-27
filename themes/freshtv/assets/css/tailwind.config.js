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
      colors: {
        ...colors,
        
          gray: {
            ...colors.gray,
            '100' : '#F2F7F9'
          }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
