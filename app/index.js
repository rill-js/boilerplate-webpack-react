import rill from 'rill'
import helmet from '@rill/helmet'
import fresh from '@rill/fresh'
import etag from '@rill/etag'
import compress from '@rill/compress'
import polyfill from '@rill/polyfill'
import serve from '@rill/static'
import progress from '@rill/progress'
import logger from '@rill/logger'
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
  .use(progress({ spinner: false, color: '#009fe2' }))
  .use(logger())
  .use(expose())
  .use(react())
  .setup(wrappers)
  .setup(views)
  .listen({ port: 8081 })
