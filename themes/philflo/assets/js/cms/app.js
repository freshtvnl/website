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
import { reviews } from './collections/reviews'
import { faq } from './collections/faq'
import { blog } from './collections/blog'
import { forms } from './collections/forms'
import { global } from './settings/global'

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
    collections: [pages, blog, members, branches, solutions, cases, knowledgebase, homepages, reviews, faq, forms, global]
  },
})

CMS.registerEditorComponent({
  // Internal id of the component
  id: "vcard",
  // Visible label
  label: "vCard",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'card_file', 
      label: 'Card File', 
      widget: 'file'
    },
    {
      name: 'button_text', 
      label: 'Button text', 
      widget: 'string',
      default: 'Download vCard'
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /vcard (\S+)\s/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
    card_file: match[1],
    button_text: match[2]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return `<a data-src="vcard" href="${obj.card_file}" class="vcard-link">${obj.button_text}</a>`
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      obj.card_file
    );
  }
});