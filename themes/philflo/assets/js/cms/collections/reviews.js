import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"
import { brandcolors } from "../partials/brandcolors"
import { selectedbranch } from "../partials/selectedbranch"
import { blocks } from "../blocks/index"

const fields = [
  ...base,
  image,
  {
    label: 'Quote',
    name: 'quote',
    widget: 'object',
    i18n: true,
    fields: [
      image,
      {
        label: 'Stars',
        name: 'stars',
        widget: 'select',
        required: false,
        options: [
          {
            label: '4 stars',
            value: 4
          },
          {
            label: '4.5 stars',
            value: 4.5
          },
          {
            label: '5 stars',
            value: 5
          }
        ],
        i18n: true
      },
      {
        label: 'Auteur',
        name: 'auteur',
        widget: 'string',
        required: false,
        i18n: true
      },
      {
        label: 'Functie',
        name: 'functie',
        widget: 'string',
        required: false,
        i18n: true
      },
      {
        label: 'Content',
        name: 'content',
        widget: 'markdown',
        required: false,
        i18n: true
      },
    ],
  },
  
]

const reviews = {
  label: 'Reviews',
  name: 'reviews',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/reviews',
  fields: [
    ...fields,
    ...blocks,
    seo
  ],
}

export {
  reviews
}