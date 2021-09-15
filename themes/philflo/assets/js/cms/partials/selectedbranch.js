export const selectedbranch = {
  label: "Selected Branch",
  name: "branch",
  widget: "relation",
  collection: "branches",
  search_fields: ["title"],
  display_fields: ["title"],
  value_field: "slug",
  multiple: false,
  required: false,
}