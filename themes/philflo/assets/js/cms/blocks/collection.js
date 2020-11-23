
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
      label: "Heading",
      name: "heading",
      widget: "select",
      options: [
        {
          "label": "H1 heading",
          "value": "h1"
        },
        {
          "label": "H2 heading",
          "value": "h2"
        },
        {
          "label": "H3 heading",
          "value": "h3"
        },
        {
          "label": "H4 heading",
          "value": "h4"
        },
        {
          "label": "H5 heading",
          "value": "h5"
        },
      ],
      required: true,
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
        },
        {
          "label": "Cases",
          "value": "cases"
        }
      ],
      required: false,
      i18n: true,
    }
  ]
}