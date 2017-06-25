import './test.css'

export default async ({ res, locals }) => {
  locals.title = 'hi7'
  res.body = (
    <div>
      Part 1
      {Array.from(Array(50)).map((_, i) => <br key={i} />)}
      Part 2
      {Array.from(Array(50)).map((_, i) => <br key={i} />)}
      Part 3
    </div>
  )
}
