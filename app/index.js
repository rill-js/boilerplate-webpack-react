import rill from 'rill'
import helmet from '@rill/helmet'
import serve from '@rill/static'
import polyfill from '@rill/polyfill'
import logging from '@rill/logger'
import fresh from '@rill/fresh'
import etag from '@rill/etag'
import compress from '@rill/compress'
import expose from '@rill/expose'
import react from '@rill/react'
import wrappers from './wrappers'
import views from './views'

export default rill()
  .use(helmet(global.SECURITY))
  .use(fresh())
  .use(etag())
  .use(compress())
  .get('/polyfill.js', polyfill())
  .get(serve('build/public', { gzip: true, cache: '30 days' }))
  .use(logging())
  .use(react())
  .use(expose())
  .setup(wrappers)
  .setup(views)
  .listen({ port: 8081 })
