import { image } from './image'

export const youtube = {
  label: 'Youtube',
  name: 'youtube',
  widget: 'object',
  required: false,
  i18n: true,
  collapsed: true,
  summary: '{{fields.id}}',
  fields: [
    {
      label: 'Youtube Video ID',
      name: 'id',
      widget: 'string',
      required: false,
      i18n: true
    },
  ]
}
