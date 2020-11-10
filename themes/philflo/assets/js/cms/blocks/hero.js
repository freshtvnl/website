import { image } from '../partials/image'

export const hero = {
  label: "hero block",
  name: "hero_block",
  widget: "object",
  required: false,
  i18n: true,
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: false,
      i18n: true,
    },
    image
  ]
}