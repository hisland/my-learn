import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  const [foo, set_foo] = useState(true)
  function hide() {
    setShow(false)
  }
  function toggle() {
    set_foo(!foo)
  }

  if (!show) {
    // 这里会导致 re-render
    setShow(true)
    return null
  }

  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <ul>
        <li>
          hooks 快速的返回 null/vNodes, 没有触发 Sub1 的 mounted-unmounted, 跟
          class 还不一样
        </li>
      </ul>
      <div>
        <button onClick={hide}>quick-toggle</button>
        <button onClick={toggle}>toggle</button>
      </div>
      {foo && <Sub1></Sub1>}
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(10)
  function add() {
    setNum(num + 1)
  }

  useEffect(() => {
    console.log('Sub1 mounted', props)
    return () => {
      console.log('Sub1 unmounted', props)
    }
  }, [])

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add}>add {num}</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
