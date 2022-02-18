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
      show1: true,
    }
  }
  render() {
    console.log('render App', this.props)
    const { state, props } = this
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({
                show1: !state.show1,
              })
            }}
          >
            show1: {state.show1 ? 'true' : 'false'}
          </button>
        </div>
        <div>Sub1 unmount 的时候, 它里面的 portal 会自动卸载销毁</div>
        {state.show1 && <Sub1></Sub1>}
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
    // 只是 create 是不行的
    const node1 = ReactDOM.createPortal(
      <div style={{ border: '1px solid green' }}>div in portal</div>,
      document.body,
      'portal1' // 可选的 key
    )
    console.log(node1)
    const node2 = ReactDOM.createPortal(
      [
        <div key="portal2-1" style={{ border: '1px solid red' }}>
          数组也是正常的
        </div>,
        <div key="portal2-2" style={{ border: '1px solid red' }}>
          数组也是正常的
        </div>,
      ],
      document.body,
      'portal2'
    )
    console.log(node2)
    // 要放在 render 的返回树是才会实际产生效果
    return (
      <div>
        <div>sub1</div>
        {node1}
        {node2}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
