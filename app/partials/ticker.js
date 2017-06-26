import { Component } from 'react'

export default class Ticker extends Component {
  componentDidMount () {
    this._interval = setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this._interval)
  }

  render () {
    const { state } = this
    if (!state) return <div>Loading...</div>
    return <div>{this.state.time.toLocaleString()}</div>
  }
}
