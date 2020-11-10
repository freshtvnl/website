import { content } from './content'
import { collection } from './collection'
import { hero } from './hero'
import { selectedwork } from './selectedwork'

export const blocks = [
  {
    label: 'Blocks',
    name: 'blocks',
    widget: 'list',
    i18n: true,
    types: [
      hero,
      content,
      collection,
      selectedwork
    ]
  }
]