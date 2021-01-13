export const cta = {
  label: "Cta",
  name: 'cta',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Url',
      name: 'url',
      widget: 'string',
      required: false,
      i18n: true
    },
    {
      label: 'text',
      name: 'text',
      widget: 'string',
      required: false,
      i18n: true
    },

    {
      label: 'Type',
      name: 'type',
      widget: 'select',
      required: false,
      i18n: true,
      options: [
        {
          label: "Text link",
          value: "link"
        },
        {
          label: "Button link",
          value: "button"
        },
      ]
    }
    
  ]
}