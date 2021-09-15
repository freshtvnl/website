import { image } from './image'

export const youtube = {
  label: 'Youtube',
  name: 'youtube',
  widget: 'object',
  required: false,
  i18n: true,
  fields: [
    {
      label: 'Youtube Video ID',
      name: 'id',
      widget: 'string',
      required: false,
      i18n: true
    },
    image
  ]
}
