import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')

  return (
    <div>
      <Sub1>
        <div>1 个 children 是 Node, React.isValidElement(children) 为 true</div>
      </Sub1>
      <Sub1>
        <div>多个children 是数组</div>
        <div>React.isValidElement(children) 为 false</div>
      </Sub1>
    </div>
  )
}

function Sub1({ children }) {
  console.log('Sub1', React.isValidElement(children), children)
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>{children}</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
