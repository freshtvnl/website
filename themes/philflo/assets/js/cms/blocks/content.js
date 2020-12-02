import { media } from '../partials/media'

export const content = {
  label: "Content block",
  name: "content_block",
  widget: "object",
  required: false,
  i18n: true,
  fields: [
    {
      label: "Align content",
      name: "align",
      widget: "select",
      options: ["left", "center", "right"],
      required: false,
      i18n: true,
    },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      required: false,
      i18n: true,
    },
    ...media
    
  ]
}