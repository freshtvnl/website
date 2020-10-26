
export const collection = {
  label: "Collection block",
  name: "collection_block",
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
      label: "Number of items",
      name: "number_of_items",
      widget: "number",
      required: false,
      min: 0,
      i18n: true,
    },
    {
      label: "Select collection",
      name: "collection",
      widget: "select",
      options: [
        {
          "label": "Team Members",
          "value": "members"
        },
        {
          "label": "Solutions",
          "value": "solutions"
        },
        {
          "label": "Branches",
          "value": "branches"
        }
      ],
      required: false,
      i18n: true,
    }
  ]
}