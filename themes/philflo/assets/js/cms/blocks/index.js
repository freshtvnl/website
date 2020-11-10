import { content } from './content'
import { collection } from './collection'
import { hero } from './hero'

export const blocks = [
  {
    label: 'Blocks',
    name: 'blocks',
    widget: 'list',
    i18n: true,
    types: [
      hero,
      content,
      collection
    ]
  }
]