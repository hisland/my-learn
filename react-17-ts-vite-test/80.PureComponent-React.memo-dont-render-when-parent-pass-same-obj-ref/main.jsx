import ReactDOM from 'react-dom'
import React, { Component, PureComponent } from 'react'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      obj: { foo: 1 },
    }
  }
  setObj = () => {
    const { state, props } = this
    state.obj.foo += 10
    this.setState({
      obj: state.obj,
    })
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <ul>
          <li>
            setObj, 因为 obj 引用没变, 子组件如果是 PureComponent 或者做了
            React.memo 处理使用 引用对比, 子组件不会刷新
            <div>
              不 render, 但是实际上已经接收到 props, 下次 render 即能读取到
            </div>
          </li>
          <li>普通的 Component , 父组件刷新即会刷新, 不受影响</li>
        </ul>
        <div>
          <button onClick={this.setObj}>setObj</button>
        </div>
        <Sub1 obj={state.obj}></Sub1>
        <Sub1Pure obj={state.obj}></Sub1Pure>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    console.log('Sub1 constructor', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  setObj = () => {
    const { state, props } = this
    this.setState({
      sub: state.sub + 1,
    })
  }
  render() {
    console.log('Sub1 render', this.props)
    const { state, props } = this
    return (
      <div style={{ border: '1px solid green', margin: '10px' }}>
        <div>Sub1</div>
        <div>
          <button onClick={this.setObj}>setObj</button>
        </div>
        <div>state.sub {state.sub}</div>
        <div>props.obj.foo {props.obj.foo}</div>
      </div>
    )
  }
}
class Sub1Pure extends PureComponent {
  constructor(props) {
    console.log('Sub1Pure constructor', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  setObj = () => {
    const { state, props } = this
    this.setState({
      sub: state.sub + 1,
    })
  }
  render() {
    console.log('Sub1Pure render', this.props)
    const { state, props } = this
    return (
      <div style={{ border: '1px solid red' }}>
        <div>Sub1Pure</div>
        <div>
          <button onClick={this.setObj}>setObj</button>
        </div>
        <div>state.sub {state.sub}</div>
        <div>props.obj.foo {props.obj.foo}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
