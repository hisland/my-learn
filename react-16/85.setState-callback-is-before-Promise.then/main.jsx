import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foo: 1 }
    console.log('App render')
  }

  setFoo = () => {
    console.log('before: ', this.state.foo)
    this.setState({ foo: this.state.foo + 1 }, () => {
      console.log('after 2: ', this.state.foo)
    })
    Promise.resolve().then(() => {
      console.log('Promise 1: ', this.state.foo)
    })
    this.setState({ bar: this.state.foo + 1 }, () => {
      console.log('after 2: ', this.state.foo)
    })
    Promise.resolve().then(() => {
      console.log('Promise 1: ', this.state.foo)
    })
    console.log('after 1: ', this.state.foo)

    setTimeout(() => {
      console.log('after 100ms: ', this.state)
    }, 100)
  }

  render() {
    console.log('run render every time')
    const { foo } = this.state

    return (
      <div>
        <ul>
          <li>setState 的回调比 Promise.then 要早</li>
        </ul>

        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>{foo}</div>
          <button onClick={this.setFoo}>setFoo</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
