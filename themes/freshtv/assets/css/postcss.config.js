
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./hugo_stats.json'],

  defaultExtractor: content => {
    let els = JSON.parse(content).htmlElements;
    return items = els.tags.concat(els.classes, els.ids)
  }
});

module.exports = {
  plugins: [
    require('tailwindcss')('./themes/freshtv/assets/css/tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
  ]
};