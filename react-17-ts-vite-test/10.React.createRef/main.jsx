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
    // 工具方法处理, 使用方式是 this.someRef1.current
    this.someRef1 = React.createRef()
  }
  // 函数处理 ref
  gotRef = (div) => {
    // unmount 的时候 div 是 null
    console.log('gotRef: ', div)
    this.someRef2 = div
  }
  render() {
    console.log('render Sub1', this.props)
    return (
      <div>
        <div ref={this.someRef1}>halo1</div>
        <div ref={this.gotRef}>halo2</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
