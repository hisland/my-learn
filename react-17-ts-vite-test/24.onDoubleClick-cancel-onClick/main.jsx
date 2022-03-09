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
  willFireOnClickHandle = null
  onMouseDown = () => {
    console.log('onMouseDown')
    this.mouseDownTime = new Date()
  }
  onClick = () => {
    console.log('onClick')
    const now = new Date()
    if (now - this.mouseDownTime < 150) {
      clearTimeout(this.willFireOnClickHandle)
      this.willFireOnClickHandle = setTimeout(() => {
        this.willFireOnClickHandle = null
        const { onClick } = this.props
        console.log('fire onClick')
        onClick && onClick()
      }, 300)
    }
  }
  onDoubleClick = () => {
    console.log('onDoubleClick')
    clearTimeout(this.willFireOnClickHandle)
    this.willFireOnClickHandle = null
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div
        onMouseDown={this.onMouseDown}
        // onMouseUp={this.onMouseUp}
        onClick={this.onClick}
        onDoubleClick={this.onDoubleClick}
      >
        文字文字文字文字文字
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
