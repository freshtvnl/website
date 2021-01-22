import { content } from './content'
import { collection } from './collection'
import { hero } from './hero'
import { selectedwork } from './selectedwork'
import { selectedfaqs } from './selectedfaqs'
import { selectedreviews } from './selectedreviews'
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
      contact,
      selectedfaqs,
      selectedreviews
    ]
  }
]