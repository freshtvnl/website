export const seo = {
  label: 'SEO',
  name: 'seo',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Meta Title',
      name: 'title',
      widget: 'string',
      required: false,
      i18n: true
    },
    {
      label: 'Meta Description',
      name: 'description',
      widget: 'string',
      required: false,
      i18n: true
    },
    {
      label: 'Image',
      name: 'image',
      widget: 'image',
      required: false,
      i18n: true
    },
    {
      label: 'No index',
      name: 'noindex',
      widget: 'boolean',
      required: false,
      i18n: true
    },
  ]
}

export const seoNoIndex = {
  label: 'SEO',
  name: 'seo',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'No index',
      name: 'noindex',
      widget: 'boolean',
      required: false,
      default: true,
      i18n: true
    },
  ]
}
