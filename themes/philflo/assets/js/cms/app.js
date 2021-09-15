// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true


import CMS from 'netlify-cms-app'


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
      locales: ['nl', 'en', 'de'],
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


CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "YouTube iFrame",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'id', 
      label: 'YouTube Id', 
      widget: 'string',
    },
    {
      name: 'title', 
      label: 'Title', 
      widget: 'string',
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /youtube (\S+)\s/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
    id: match[1],
    title: match[2],
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return `{{< youtube id="${obj.id}" class="aspect-w-16 aspect-h-9" title="${obj.title}" >}}`
  },
  //Preview output for this component. Can either be a string or a React component
  //(component gives better render performance)
  toPreview: function(obj) {
    return (
      `<img src="http://img.youtube.com/vi/${obj.id}/maxresdefault.jpg" alt="${obj.title}"/>`
    );
  }
});

