import { image } from "../partials/image"
import { base } from "../partials/base"
import { seo } from "../partials/seo"
import { blocks } from "../blocks/index"

const fields = [
  ...base,
  {
    label: "Select Parent",
    name: "parent",
    widget: "relation",
    collection: "solutions",
    search_fields: ["title"],
    display_fields: ["title"],
    value_field: "id",
    multiple: false,
    i18n: true,
    required: false
  },
  image,
  
]

const solutions = {
  label: 'Solutions',
  name: 'solutions',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/solutions',
  fields: [
    ...fields,
    ...blocks,
    seo
  ],
}

export {
  solutions
}