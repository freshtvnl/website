import { content } from './content'
import { collection } from './collection'

export const blocks = [
  {
    label: 'Blocks',
    name: 'blocks',
    widget: 'list',
    i18n: true,
    types: [
      content,
      collection
    ]
  }
]