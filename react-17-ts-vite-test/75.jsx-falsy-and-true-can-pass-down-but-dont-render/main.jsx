import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  function toggle() {
    setShow(!show)
  }
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <ul>
        <li>子组件能拿到父组件传入的 falsy 值以及 true, 但是最终不会渲染</li>
      </ul>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
      {show && (
        <>
          <Sub1 />
          <Sub1></Sub1>
          <Sub1>{true}</Sub1>
          <Sub1>{false}</Sub1>
          <Sub1>{null}</Sub1>
          <Sub1>{undefined}</Sub1>
          <Sub1>{123}</Sub1>
        </>
      )}
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      Sub1 {props.children}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
