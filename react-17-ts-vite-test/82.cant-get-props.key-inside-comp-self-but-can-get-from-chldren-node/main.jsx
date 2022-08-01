import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      foo: 1,
    }
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <button
          onClick={(ee) => {
            this.setState({
              foo: state.foo + 1,
            })
          }}
        >
          add1
        </button>
        <Sub1 key={state.foo}></Sub1>
        <Sub2>
          <Sub1 key={state.foo}></Sub1>
        </Sub2>
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
  render() {
    console.log('Sub1 render', this.props)
    // 这里并不能直接拿到 key, react 约定 key 属性作为唯一标识, 并提示可以换个名字来传值
    console.log('Sub1.props.key', this.props.key) // 读取 props.key, react 会报错并提示
    const { state, props } = this
    return <div>文字</div>
  }
}

class Sub2 extends Component {
  constructor(props) {
    console.log('Sub2 constructor', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  render() {
    console.log('Sub2 render', this.props)
    const { state, props } = this
    const { children } = props
    return (
      <div>
        <div>
          文字 children.key {children.key}, 这里从 children 的 node 上能拿到 key
        </div>
        <div>antd 里面的 Select.Option key 可以作为 value就是这样操作的</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
