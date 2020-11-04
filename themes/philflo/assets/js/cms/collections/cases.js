import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"

const fields = [
  ...base,
  image,
  seo
]

const cases = {
  label: 'Cases',
  name: 'cases',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/cases',
  fields: [
    ...fields
  ],
}

export {
  cases
}