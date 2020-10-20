import { image } from "../partials/image"

const fields = [
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    required: false,
    i18n: true
  },
  {
    label: 'Slug',
    name: 'slug',
    widget: 'string',
    required: false,
    i18n: true
  },
  image
]

const pages = {
  label: 'Pages',
  name: 'pages',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/pages',
  fields: [
    ...fields
  ],
}


export {
  pages
}