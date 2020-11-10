export const base = [
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    required: false,
    i18n: true
  },
  {
    label: 'Slug',
    name: 'slug',
    widget: 'string',
    required: false,
    i18n: true
  },
  {
    label: "Draft",
    name: "draft",
    widget: "boolean",
    required: false,
    default: true,
    i18n: true
  },
  {
    label: "ID",
    name: "id",
    widget: "ncw-id",
    required: true,
    i18n: true
  },
]