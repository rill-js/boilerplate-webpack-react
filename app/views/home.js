import React from 'react'
import logoImg from '../assets/logo.jpg'

export default async ({ res, locals }) => {
  locals.title = 'Home Page'
  res.body = (
    <div>
      <img src={logoImg} />
      <a href='/other'>Go to the other page</a>
    </div>
  )
}
