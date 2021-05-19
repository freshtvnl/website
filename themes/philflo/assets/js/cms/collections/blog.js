import { image } from "../partials/image"
import { menu } from "../partials/menu"
import { base } from "../partials/base"
import { seo } from "../partials/seo"
import { blocks } from "../blocks/index"
import { brandcolors } from "../partials/brandcolors"

const fields = [
  ...base,
  image,
  {
    label: 'Content',
    name: 'body',
    widget: 'markdown',
    required: false,
    i18n: true
  },
  brandcolors
]

const blog = {
  label: 'Blog',
  name: 'blog',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  view_filters: [
    {
      label: 'Drafts',
      field: 'draft',
      pattern: true
    }
  ],
  folder: 'content/blog',
  fields: [
    ...fields,
    seo,
  ],
}


export {
  blog
}