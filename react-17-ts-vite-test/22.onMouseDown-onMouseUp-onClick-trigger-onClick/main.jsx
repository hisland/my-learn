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
  willFireOnClick = true
  mouseDownTime = null
  onMouseDown = () => {
    console.log('onMouseDown')
    this.willFireOnClick = true
    this.mouseDownTime = new Date()
  }
  onMouseUp = () => {
    console.log('onMouseUp')
    if (this.willFireOnClick && this.mouseDownTime) {
      const now = new Date()
      console.log(33, now - this.mouseDownTime)
      // 按下 300ms 说明在选择复制, 不触发 onClick
      if (now - this.mouseDownTime > 300) {
        this.willFireOnClick = false
      }
    }
  }
  onClick = () => {
    console.log('onClick')
    const { onClick } = this.props
    if (this.willFireOnClick) {
      console.log('fire onClick')
      onClick && onClick()
    }
  }
  onDoubleClick = () => {
    console.log('onDoubleClick')
    this.willFireOnClick = false
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onClick={this.onClick}
        onDoubleClick={this.onDoubleClick}
      >
        文字文字文字文字文字
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
