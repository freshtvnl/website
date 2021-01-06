const { colors, fontFamily, maxWidth, screens } = require('tailwindcss/defaultTheme')
const path = require("path");

module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: [
      path.resolve(__dirname) + "/layouts/**/*.html", 
      path.resolve(__dirname) + "/content/**/*.md", 
    ],
    options: {
      safelist: [
        'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-pink-500', 'bg-yellow-500'
      ],
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
        'sans' : ['Bw Modelica SS01', 'sans-serif']
      },

      screens: {
        ...screens,
        '2xl' : '1700px'
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
          },

          orange: {
            '500' : '#EF9620'
          },

          yellow: {
            ...colors.yellow,
            '500' : '#ffc200'
          },
          red: {
            ...colors.red,
            '500' : '#da453f'
          },
          pink: {
            ...colors.pink,
            '500' : '#ec008c'
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
