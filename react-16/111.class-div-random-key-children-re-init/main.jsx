import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 1,
      random_to_trigger_refresh: 1,
    }
    console.log('App constructor')
  }

  setAnyThing = () => {
    this.setState({ random_to_trigger_refresh: Math.random() })
  }

  render() {
    console.log('App render')
    const { foo } = this.state

    return (
      <div>
        <ul>
          <li>div 上的 key 变化会导致子组件重新初始化</li>
        </ul>

        <div
          style={{ border: '1px solid pink', margin: '10px' }}
          key={this.state.random_to_trigger_refresh}
        >
          <div>App: {foo}</div>
          <button onClick={this.setAnyThing}>setAnyThing</button>
          <Sub1 foo={this.state.foo}></Sub1>
        </div>
      </div>
    )
  }
}
class Sub1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { myBar: 33 }
    console.log('Sub1 constructor')
  }

  setAnyThing = () => {
    this.setState({ random_to_trigger_refresh: Math.random() })
  }

  render() {
    console.log('Sub1 render')
    const { foo } = this.props

    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub1: {this.state.myBar}</div>
          <div>Sub1: {foo}</div>
          <button onClick={this.setAnyThing}>setFoo</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
