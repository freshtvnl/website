export const image = {
  label: "Image",
  name: 'image',
  widget: 'object',
  i18n: true,
  required: false,
  collapsed: true,
  summary: '{{fields.source}}',
  fields: [
    {
      label: 'Source',
      name: 'source',
      widget: 'image',
      required: false,
      i18n: true
    },
    {
      label: 'Alt text',
      name: 'alt',
      widget: 'string',
      required: false,
      i18n: true
    },
  ]
}