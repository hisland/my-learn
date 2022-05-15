import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('App constructor', props)
    super(props)
    this.state = {
      show: true,
    }
  }
  SetFalse = () => {
    this.setState({
      show: false,
    })
  }
  componentWillUnmount() {
    console.log('App componentWillUnmount')
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    if (!state.show) {
      // 这里会导致 re-render
      this.setState({
        show: true,
      })
      return null
    }
    return (
      <div>
        <ul>
          <li>
            class 的 render 快速返回 null/vNodes, 触发了 Sub1 的
            umounted/mounted
          </li>
        </ul>
        <div>
          <button onClick={this.SetFalse}>quick-toggle</button>
        </div>
        <Sub1></Sub1>
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
  componentWillUnmount() {
    console.log('Sub1 componentWillUnmount')
  }
  render() {
    console.log('Sub1 render', this.props)
    const { state, props } = this
    return <div>文字 {state.sub}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
