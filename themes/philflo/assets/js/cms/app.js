// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true


import CMS from 'netlify-cms-app'
import { Widget as IdWidget } from '@ncwidgets/id'

import { branches } from './collections/branches'
import { members } from './collections/members'

import { cases } from './collections/cases'
import { pages } from './collections/pages'
import { solutions } from './collections/solutions'
import { knowledgebase } from './collections/knowledgebase'
import { homepages } from './collections/homepages'

CMS.registerWidget(IdWidget)

CMS.init({
  config: {
    load_config_file: false,
    local_backend: true,
    media_folder: '/static/media',
    public_folder: '/media',
    backend: {
      name: 'github',
      repo: 'freshtvnl/website'
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
    collections: [pages, members, branches, solutions, cases, knowledgebase, homepages]
  },
})
