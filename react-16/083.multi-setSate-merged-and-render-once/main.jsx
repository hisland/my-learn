import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foo: 1 }
    console.log('App render')
  }

  setFoo = () => {
    console.log('before foo: ', this.state.foo)
    this.setState({ foo: this.state.foo + 1 })
    console.log('after foo: ', this.state.foo)
    this.setState({ bar: this.state.foo + 1 })
    console.log('after foo: ', this.state.foo)
    console.log('after bar: ', this.state.bar)

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
          <li>多次 setState 结果合并, 只触发一次 render</li>
          <li>
            并且 setState 之后不会立即反应 this.state, 此时取的还是上一次的状态
          </li>
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
