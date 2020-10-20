// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true

import CMS from 'netlify-cms-app'

import { pages } from './collections/pages'


CMS.init({
  config: {
    load_config_file: false,
    local_backend: true,
    media_folder: '/static/meda',
    public_folder: '/meda',
    backend: {
      name: 'git-gateway'
    },
    media_library: {
      name: '',
      config: {
        max_file_size: 700000
      }
    },
    i18n: {
      structure: 'multiple_files',
      locales: ['nl', 'en'],
      default_locale: 'nl'
    },
    collections: [pages]
  },
})