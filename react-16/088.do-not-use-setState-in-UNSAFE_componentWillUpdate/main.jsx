import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { foo: 1 }
    console.log('App constructor')
  }

  setFoo = () => {
    this.setState({ foo: this.state.foo + 1 })
  }

  render() {
    console.log('App render')
    const { foo } = this.state

    return (
      <div>
        <ul>
          <li>
            Sub1 setState, 并且触发了父组件的 prop 修改, 最终只 render 一次
          </li>
        </ul>

        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>App: {foo}</div>
          <Sub1 foo={this.state.foo} setFoo={this.setFoo}></Sub1>
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

  componentDidMount() {
    console.log('Sub1 componentDidMount')
  }

  UNSAFE_componentWillUpdate() {
    console.log('Sub1 UNSAFE_componentWillUpdate')
    this.setState({ myBar: this.state.myBar + 10 }) // 这个会出发不断刷新
  }

  setFoo = () => {
    this.setState({ myBar: this.state.myBar + 3 })
    this.props.setFoo()
  }

  render() {
    console.log('Sub1 render')
    const { foo } = this.props

    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub1: {this.state.myBar}</div>
          <div>Sub1: {foo}</div>
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
