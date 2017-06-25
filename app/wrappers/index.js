import { wrap } from '@rill/react'
import pageWrapper from './page'

export default app => app
  .get('/*', wrap(pageWrapper), ({ res }, next) => {
    // Preload required files.
    res.append('Link', '</polyfill.js>; rel=preload; as=script;')
    res.append('Link', '</index.js>; rel=preload; as=script;')
    res.append('Link', '</index.css>; rel=preload; as=style;')
    return next()
  })
