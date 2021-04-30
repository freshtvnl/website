const fields = [
  {
    label: 'Footer ',
    name: 'footer',
    widget: 'object',
    fields: [
      {
        label: 'Title',
        name: 'title',
        widget: 'string'
      },
      {
        label: 'Phonenumber',
        name: 'phonenumber',
        widget: 'object',
        fields: [
          {
            label: 'Formatted',
            name: 'formatted',
            widget: 'string'
          },
          {
            label: 'Raw',
            name: 'raw',
            widget: 'string'
          }
        ]
      },
      {
        label: 'Address',
        name: 'address',
        widget: 'object',
        fields: [
          {
            label: 'Address 1',
            name: 'address1',
            widget: 'text'
          },
          {
            label: 'Address 2',
            name: 'address2',
            widget: 'text'
          },
          {
            label: 'Address 3',
            name: 'address3',
            widget: 'text'
          },
          {
            label: 'Kvk',
            name: 'kvk',
            widget: 'text'
          },
        ]
      },
      {
        label: 'Email',
        name: 'email',
        widget: 'object',
        fields: [
          {
            label: 'Formatted',
            name: 'formatted',
            widget: 'string'
          },
          {
            label: 'Raw',
            name: 'raw',
            widget: 'string'
          }
        ]
      },
      {
        label: 'Social',
        name: 'social',
        widget: 'object',
        fields: [
          {
            label: 'Title',
            name: 'title',
            widget: 'string'
          },
          {
            label: 'LinkedIn',
            name: 'linkedin',
            widget: 'string'
          },
          {
            label: 'Instagram',
            name: 'instagram',
            widget: 'string'
          },
          {
            label: 'Facebook',
            name: 'facebook',
            widget: 'string'
          },
          {
            label: 'YouTube',
            name: 'youtube',
            widget: 'string'
          },
        ]
      },
    ]
  }
]

export const global = {
  label: 'Settings',
  name: 'settings',
  format: 'yaml',
  files: [
    {
      label: "[NL] General settings",
      name: 'general_nl',
      file: 'config/_default/params.nl.yaml',
      widgets: 'object',
      fields: [...fields]
    },
  ]
}

