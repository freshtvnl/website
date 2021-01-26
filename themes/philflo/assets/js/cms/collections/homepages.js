import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"
import { blocks } from "../blocks/index"
import { brandcolors } from "../partials/brandcolors"

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
  brandcolors
]

const homepages = {
  label: 'Homepages',
  name: 'homepages',
  create: true,
  media_folder: '',
  public_folder: '',
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
  files: [
    {
      label: "[NL] homepage",
      name: "nlhomepage",
      file: "content/_index.md",
      fields: [
        ...fields,
        ...blocks,
        seo
      ],
    },
    {
      label: "[EN] homepage",
      name: "enhomepage",
      file: "content/_index.en.md",
      fields: [
        ...fields,
        ...blocks,
        seo
      ],
    }
  ],
  fields: [
    ...fields
  ],
}

export {
  homepages
}

