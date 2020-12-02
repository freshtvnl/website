import { media } from '../partials/media'

export const banner = {
  label: "Banner block",
  name: "banner_block",
  widget: "object",
  required: false,
  i18n: true,
  fields: [
    {
      label: "Full width",
      name: "fullwidth",
      widget: "boolean",
      required: false,
      i18n: true,
    },
    ...media
  ]
}