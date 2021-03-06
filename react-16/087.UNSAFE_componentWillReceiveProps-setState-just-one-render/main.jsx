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
            在 UNSAFE_componentWillReceiveProps 里, 组件的状态还没有变,
            如果同时有 setState 和 props 变化, 此时的 this.state 也还是没变
          </li>
        </ul>

        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>App foo: {foo}</div>
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

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log(
      'Sub1 UNSAFE_componentWillReceiveProps',
      nextProps,
      this.state.myBar // UNSAFE_componentWillReceiveProps 内 this.state 是变化之前的
    )
    this.setState({ myBar: this.state.myBar + 10 }) // 所以这个结果不会基于下面的进行累加, 而是直接抛弃了下面的 setState
  }

  setFoo = () => {
    console.log('Sub1 setFoo', this.state.myBar)
    this.setState({ myBar: this.state.myBar + 3 }) // 会等待异步更新
    this.props.setFoo() // 同时触发 props 更新
  }

  render() {
    console.log('Sub1 render')
    const { foo } = this.props

    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub1 myBar: {this.state.myBar}</div>
          <div>Sub1 foo: {foo}</div>
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
