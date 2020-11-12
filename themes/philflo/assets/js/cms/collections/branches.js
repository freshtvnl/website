import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"
import { brandcolors } from "../partials/brandcolors"

const fields = [
  ...base,
  image,
  brandcolors,
  seo
]

const branches = {
  label: 'Branches',
  name: 'branches',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/branches',
  fields: [
    ...fields
  ],
}

export {
  branches
}