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
    this.setState({ foo: this.state.foo + 1 })
    console.log('after: ', this.state.foo)
    this.setState({ foo: this.state.foo + 1 })
    console.log('after: ', this.state.foo)

    setTimeout(() => {
      console.log('after 100ms: ', this.state.foo)
    }, 100)
  }

  render() {
    console.log('run render every time')
    const { foo } = this.state

    return (
      <div>
        <ul>
          <li>setState 的值不能马上从 this.state.xxx 拿出来</li>
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
