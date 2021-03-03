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
    label: 'Content type',
    name: 'content_type',
    widget: 'select',
    required: false,
    i18n: true,
    options: [
      {
        label: "Case",
        value: "case"
      },
      {
        label: "Portfolio",
        value: "portfolio"
      }
    ]
  },

  brandcolors,
  selectedbranch,
  
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
    ...fields,
    ...blocks,
    seo
  ],
}

export {
  cases
}