import router from 'rill'
import homePage from './home'
import otherPage from './other'
import notFound from './404'

export default router()
  .get('/', homePage)
  .get('/other', otherPage)
  .get(notFound)
