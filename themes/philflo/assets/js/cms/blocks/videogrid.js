import { youtube } from "../partials/youtube";

export const videogrid = {
  label: "Video Grid block",
  name: "videogrid_block",
  widget: "object",
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
      required: false,
      i18n: true,
    },
    {
      label: "Videos",
      name: "videos",
      widget: "list",
      fields: [
        youtube,
        {
          label: "Content",
          name: "content",
          widget: "markdown",
          required: false,
          i18n: true,
        },
      ]
    }
  ]
}