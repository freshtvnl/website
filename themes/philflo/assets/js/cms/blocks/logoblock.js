export const logoblock = {
  label: "Logo block",
  name: "logoblock",
  widget: "list",
  required: false,
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
      widget: "string",
      required: false,
      i18n: true,
    },
    {
      label: "Logos",
      name: "logo_items",
      widget: "relation",
      collection: "logos",
      search_fields: ["title"],
      display_fields: ["title"],
      value_field: "slug",
      multiple: true,
      i18n: true,
      required: false,
    }
  ]
}