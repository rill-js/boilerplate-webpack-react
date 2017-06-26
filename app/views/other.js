import Ticker from '../partials/ticker'

export default async ({ res, locals }) => {
  locals.title = 'Other Page'
  res.body = (
    <div>
      It is currently <Ticker />
      <br />
      <a href='/'>Go back</a>
    </div>
  )
}
