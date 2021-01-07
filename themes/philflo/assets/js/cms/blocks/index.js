import { content } from './content'
import { collection } from './collection'
import { hero } from './hero'
import { selectedwork } from './selectedwork'
import { selectedfaqs } from './selectedfaqs'
import { selectedreviews } from './selectedreviews'
import { contact } from './contact'
import { banner } from './banner'

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
      banner,
      selectedfaqs,
      selectedreviews
    ]
  }
]