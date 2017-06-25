export default async ({ res, locals }) => {
  locals.title = 'Other Page'
  res.body = (
    <div>
      <a href='/'>Go back</a>
    </div>
  )
}
