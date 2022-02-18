import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  return (
    <div>
      <Sub1 style={{ color: 'red' }}></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  return <div style={props.style}>文字</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
