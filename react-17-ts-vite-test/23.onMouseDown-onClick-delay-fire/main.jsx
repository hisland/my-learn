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
  mouseDownTime = null
  onMouseDown = () => {
    console.log('onMouseDown')
    this.mouseDownTime = new Date()
  }
  onClick = () => {
    console.log('onClick')
    const now = new Date()
    console.log(33, now - this.mouseDownTime)
    // 按下 300ms 说明在选择复制, 不触发 onClick
    if (now - this.mouseDownTime < 300) {
      console.log('fire onClick')
      const { onClick } = this.props
      onClick && onClick()
    }
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div onMouseDown={this.onMouseDown} onClick={this.onClick}>
        文字文字文字文字文字
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
