import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('run App')

  return (
    <div>
      <Sub1 style={{ color: 'red' }}></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('run Sub1', props)
  return <div style={props.style}>文字</div>
}

Sub1.propTypes = {
  style: PropTypes.object,
}
Sub1.defaultProps = {}

ReactDOM.render(<App />, document.getElementById('root'))
