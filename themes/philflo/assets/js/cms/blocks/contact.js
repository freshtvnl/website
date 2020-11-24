
export const contact = {
  label: "Select contact",
  name: "contact_block",
  widget: "object",
  required: false,
  i18n: true,
  fields: [
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      required: false,
      i18n: true,
    },
    {
      label: "Selected Contact",
      name: "contacts",
      widget: "relation",
      collection: "members",
      search_fields: ["title"],
      display_fields: ["title"],
      value_field: "id",
      multiple: true,
      i18n: true,
    },
  ]
}