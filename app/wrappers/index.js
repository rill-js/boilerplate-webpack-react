import router from 'rill'
import { wrap } from '@rill/react'
import pageWrapper from './page'

export default router().get(
  '/*',
  wrap(pageWrapper, ({ res }) => {
    // Preload required files.
    res.append('Link', '</polyfill.js>; rel=preload; as=script;')
    res.append('Link', '</index.js>; rel=preload; as=script;')
    res.append('Link', '</index.css>; rel=preload; as=style;')
  })
)
