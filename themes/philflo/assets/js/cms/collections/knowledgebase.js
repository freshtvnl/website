import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"

const fields = [
  ...base,
  image,
  seo
]

const knowledgebase = {
  label: 'Knowledge Base',
  name: 'knowledgebase',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/knowledgebase',
  fields: [
    ...fields
  ],
}

export {
  knowledgebase
}