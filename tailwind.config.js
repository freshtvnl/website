const { colors, fontFamily, maxWidth, screens, lineHeight } = require('tailwindcss/defaultTheme')
const path = require("path");

module.exports = {
  mode: "jit",
  variants: {
    extend: {
      inset: ['hover', 'focus', 'group-hover'],
      height: ['hover', 'focus', 'group-hover'],
      translate: ['hover', 'focus', 'group-hover'],
      minHeight: ['hover', 'focus', 'group-hover'],
      backgroundOpacity: ['hover'],
    }
  },
  purge: {
    content: [
    "./themes/philflo/layouts/**/*.html", 
    "./content/**/*.md", 
    "./content/**/*.html",
    ],
    safelist: [
      'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-pink-500', 'bg-yellow-500', 'bg-orange-500'
    ],
  },
  theme: {
    extend: {

      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              lineHeight: '1.4'
            }
          }
        },

        xl: {
          css: {
            h2: {
              lineHeight: '1.4'
            }
          }
        }

      }),

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
          },

         

      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
