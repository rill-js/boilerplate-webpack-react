import React from 'react'

export default async ({ req, res, locals }) => {
  locals.title = '404 Page'
  res.status = 404
  res.body = (
    <div>
      Page not found at {req.pathname}
      <br />
      <a href='/'>Go home</a>
    </div>
  )
}
