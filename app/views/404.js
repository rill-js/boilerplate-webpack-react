export default async ({ req, res, locals }) => {
  locals.title = '404 Page'
  res.body = (
    <div>
      Page not found at {req.pathname}
      <br />
      <a href='/'>Go home</a>
    </div>
  )
}
