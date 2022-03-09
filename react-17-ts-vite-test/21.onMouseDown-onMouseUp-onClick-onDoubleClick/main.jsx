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
      <div
        onMouseDown={(ee) => {
          console.log('onMouseDown', ee)
        }}
        onMouseUp={(ee) => {
          console.log('onMouseUp', ee)
        }}
        onClick={(ee) => {
          console.log('onClick', ee)
        }}
        onDoubleClick={(ee) => {
          console.log('onDoubleClick', ee)
        }}
      >
        文字文字文字文字文字
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
