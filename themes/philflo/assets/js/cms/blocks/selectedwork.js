
export const selectedwork = {
  label: "Selected work block",
  name: "selectedwork_block",
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
      label: "Selected Items",
      name: "items",
      widget: "relation",
      collection: "cases",
      search_fields: ["title"],
      display_fields: ["title"],
      value_field: "slug",
      multiple: true,
      i18n: true,
    },
    {
      label: "Show more items link",
      name: "more_items",
      widget: "boolean",
      i18n: true,
      required: false
    }
  ]
}