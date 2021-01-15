export const menu = {
  label: "Menu",
  name: 'menu',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'Main navigation',
      name: 'main',
      widget: 'object',
      required: false,
      i18n: true,
      fields: [
        {
          label: "Weight",
          name: "weight",
          widget: "number",
          required: false,
          i18n: true,
        },
      ]
    },
    {
      label: 'Footer navigation',
      name: 'footer',
      widget: 'object',
      required: false,
      i18n: true,
      fields: [
        {
          label: "Weight",
          name: "weight",
          widget: "number",
          required: false,
          i18n: true,
        },
      ]
    },
   
  ]
}