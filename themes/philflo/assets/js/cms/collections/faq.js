import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"
import { blocks } from "../blocks/index"

const fields = [
  ...base,
  image,
  {
    label: 'FAQ',
    name: 'faq',
    widget: 'object',
    i18n: true,
    fields: [
      {
        label: 'Question',
        name: 'question',
        widget: 'string',
        required: false,
        i18n: true
      },
      {
        label: 'Answer',
        name: 'answer',
        widget: 'markdown',
        required: false,
        i18n: true
      },
    ],
  },
  
]

const faq = {
  label: 'FAQ',
  name: 'faq',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/faq',
  fields: [
    ...fields,
    ...blocks,
    seo
  ],
}

export {
  faq
}