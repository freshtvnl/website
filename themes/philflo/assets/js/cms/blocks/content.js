import { media } from '../partials/media'
import { cta } from '../partials/cta'

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
    {
      label: "Select Form",
      name: "form",
      widget: "relation",
      collection: "forms",
      search_fields: ["title"],
      display_fields: ["title"],
      value_field: "slug",
      multiple: false,
      i18n: true,
      required: false
    },
    ...media,
    cta,
    
  ]
}