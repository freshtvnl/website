import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"
import { blocks } from "../blocks/index"

const fields = [
  ...base,
  image,
  {
    label: 'Function',
    name: 'function',
    widget: 'string',
    required: false,
    i18n: true
  },
  {
    label: 'Description',
    name: 'description',
    widget: 'text',
    required: false,
    i18n: true
  },
  seo
]

const members = {
  label: 'Members',
  name: 'members',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  sortable_fields: [
    'title', 'commit_date'
  ],
  view_filters: [
    {
      label: 'Drafts',
      field: 'draft',
      pattern: true
    }
  ],
  editor: {
    preview: false
  },
  folder: 'content/members',
  fields: [
    ...fields,
    ...blocks
  ],
}

export {
  members
}