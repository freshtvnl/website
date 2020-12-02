import { image } from './image'

export const video = {
  label: 'Video',
  name: 'video',
  widget: 'object',
  i18n: true,
  fields: [
    {
      label: 'MP4 Video url',
      name: 'source_mp4',
      widget: 'string',
      required: false,
      i18n: true
    },
    {
      label: 'WebM Video url',
      name: 'source_webm',
      widget: 'string',
      required: false,
      i18n: true
    },
    image,
    {
      label: 'AutoPlay',
      name: 'autoplay',
      widget: 'boolean',
      required: false,
      i18n: true
    },
  ]
}
