import { media } from '../partials/media'

export const hero = {
  label: "Hero block",
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
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      required: false,
      i18n: true,
    },
    {
      label: "Align content",
      name: "align",
      widget: "select",
      options: ["left", "center", "right"],
      required: false,
      i18n: true,
      default: "left"
    },
    ...media
  ]
}