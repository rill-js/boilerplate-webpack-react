import homePage from './home'
import otherPage from './other'
import notFound from './404'

export default app => app
  .get('/', homePage)
  .get('/other', otherPage)
  .get(notFound)
