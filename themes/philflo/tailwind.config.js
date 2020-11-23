const { colors, fontFamily, maxWidth } = require('tailwindcss/defaultTheme')


module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["layouts/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {

      maxWidth: {
        ...maxWidth,
        'screen-2xl': "1800px"
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
  variants: {
    // backgroundOpacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    // translate: ["responsive", "hover", "focus", "active", "group-hover"],
    // transitionProperty: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    // transform: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    // transformOrigin: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    // opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
