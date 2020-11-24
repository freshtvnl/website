import { content } from './content'
import { collection } from './collection'
import { hero } from './hero'
import { selectedwork } from './selectedwork'
import { contact } from './contact'

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
      selectedwork,
      contact
    ]
  }
]