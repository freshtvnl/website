import { image } from "../partials/image"
import { seoNoIndex } from "../partials/seo"

function makeUnique(base) {
  var now = new Date().getTime();
  var random = Math.floor(Math.random() * 100000);
  return base + now + random;
}

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
    widget: 'hidden',
    required: false,
    default: makeUnique("phil"),
    i18n: true,
    hidden: true
  },
  image,
]

const logos = {
  label: 'Logos',
  name: 'logos',
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
  folder: 'content/logos',
  fields: [
    ...fields,
    seoNoIndex
  ],
}

export {
  logos
}