import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('constructor App')
    super(props)
    this.state = {
      foo: 1,
    }
  }
  render() {
    console.log('render App', this.props)
    const { state, props } = this
    return (
      <div>
        <Sub1 children={'god1'}></Sub1>
        <Sub1>halo2</Sub1>
        <Sub1 children={'god3'}>halo3</Sub1>
        <pre>
          从报错来看, 同时提供 children 属性的 子元素, 生成如下的形式,
          后面的覆盖前面的
          {'{'}
          children: 'god3', children: "halo3"
          {'}'}
        </pre>
        <div>
          vite 有 warning: Duplicate key "children" in object literal 提示
        </div>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    console.log('constructor Sub1', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  render() {
    console.log('render Sub1', this.props)
    const { state, props } = this
    return <div>{props.children}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
