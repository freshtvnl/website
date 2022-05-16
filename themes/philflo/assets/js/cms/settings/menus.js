const menuFields = [
  {
    label: 'Name',
    name: 'name',
    widget: 'string'
  },
  {
    label: 'Url',
    name: 'url',
    widget: 'string'
  },
  {
    label: 'Weight',
    name: 'weight',
    widget: 'number',
    default: '0',
    max: 200
  },
  {
    label: 'Title',
    name: 'title',
    widget: 'string',
    required: false
  },
  {
    label: 'Parent',
    name: 'parent',
    widget: 'string',
    required: false
  },
  {
    label: 'Post',
    name: 'post',
    widget: 'string',
    required: false
  },
  {
    label: 'Pre',
    name: 'pre',
    widget: 'string',
    required: false
  }
]


export const menuItems = [

    {
      label: 'Footer menu 1',
      name: 'footermenu1',
      widget: 'list',
      summary: '{{parent}} -> {{name}}',
      fields: menuFields
    },

    {
      label: 'Footer menu 2',
      name: 'footermenu2',
      widget: 'list',
      summary: '{{parent}} -> {{name}}',
      fields: menuFields
    },

    {
      label: 'Footer menu 3',
      name: 'footermenu3',
      widget: 'list',
      summary: '{{parent}} -> {{name}}',
      fields: menuFields
    },

    {
      label: 'Footer menu 4',
      name: 'footermenu4',
      widget: 'list',
      summary: '{{parent}} -> {{name}}',
      fields: menuFields
    },
    {
      label: 'Footer menu 5',
      name: 'footermenu5',
      widget: 'list',
      summary: '{{parent}} -> {{name}}',
      fields: menuFields
    },


  ]

export const menus = {
  label: 'Menus',
  name: 'menus',
  format: 'yaml',
  files: [
    {
      label: "[NL] Menu Settings",
      name: 'menu_nl',
      file: 'config/_default/menus.nl.yaml',
      widgets: 'object',
      fields: menuItems
    },
    {
      label: "[EN] Menu Settings",
      name: 'menu_en',
      file: 'config/_default/menus.en.yaml',
      widgets: 'object',
      fields: menuItems
    },
    {
      label: "[DE] Menu Settings",
      name: 'menu_de',
      file: 'config/_default/menus.de.yaml',
      widgets: 'object',
      fields: menuItems
    },
  ]
}
