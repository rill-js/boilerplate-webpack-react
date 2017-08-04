import ms from 'ms'
import router from 'rill'
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
import body from '@rill/body'
import apiCtrls from '../api'
import appCtrls from './controllers'
import wrappers from './wrappers'
import views from './views'
const message = 'App Started'
console.time(message)

export default router()
  .use(helmet(global.SECURITY))
  .use(react())
  .use(fresh())
  .use(etag())
  .use(compress())
  .get('/polyfill.js', polyfill())
  .get(
    serve('build/public', { gzip: true, cache: `${ms('30 days')}; immutable` })
  )
  .use(logger())
  .use(progress({ spinner: false, color: '#009fe2' }))
  .use(expose())
  .use(body())
  .at('/api/*', !process.browser && apiCtrls)
  .at('/app/*', appCtrls)
  .get(wrappers)
  .get(views)
  .listen(() => {
    console.timeEnd(message)
    console.log('')
  })
