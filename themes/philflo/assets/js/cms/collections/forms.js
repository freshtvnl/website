const fields = [
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    required: false,
    i18n: true,
  },
  {
    label: 'Thank you page url',
    name: 'thankyou_page',
    widget: 'string',
    required: false,
    i18n: true
  },
  {
    label: 'Headless',
    name: 'headless',
    widget: 'hidden',
    required: false,
    i18n: true,
    value: true
  },
  {
    label: "ID",
    name: "id",
    widget: "ncw-id",
    required: true,
    i18n: true
  },
  {
    label: "Form Type",
    name: "type",
    widget: "select",
    options: ["quotation", "contact", "birthday", "review_intern", "review_extern"],
    required: true,
    i18n: true,
  },
]

const forms = {
  label: 'Forms',
  name: 'forms',
  create: true,
  i18n: true,
  media_folder: 'images',
  public_folder: 'images',
  format: 'frontmatter',
  path: '{{slug}}/index',
  editor: {
    preview: false
  },
  folder: 'content/forms',
  fields: [
    ...fields,

  ],
}

export {
  forms
}