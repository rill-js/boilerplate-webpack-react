import '../assets/css/page.css'
import { Component } from 'react'
export default class Page extends Component {
  render () {
    const { context, props } = this
    const { locals } = context

    return <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{locals.title}</title>
        <meta name='description' content={locals.description} />
        <link rel='stylesheet' href='/index.css' />
      </head>
      <body>
        <div id='root'>{props.children}</div>
        <script src='/polyfill.js' />
        <script src='/index.js' />
      </body>
    </html>
  }
}
