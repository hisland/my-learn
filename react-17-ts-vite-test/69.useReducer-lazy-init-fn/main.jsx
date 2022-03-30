import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  const toggle = () => setShow(!show)
  const [num, setNum] = useState(0)
  const add1 = () => setNum(num + 1)
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <div>
        <button onClick={toggle}>toggle {show ? 'true' : 'false'}</button>
        <button onClick={add1}>add1 {num}</button>
      </div>
      {show && <Sub1 num={num}></Sub1>}
      {show && <Sub1 num={num}></Sub1>}
    </div>
  )
}

const initState = {
  num: 0,
  sub: {
    val: 1000,
  },
}
function myReducer(state, action) {
  console.log('state: ', state)
  switch (action.type) {
    case 'add10':
      return { ...state, num: state.num + 10 }
    case 'add_sub100':
      return { ...state, sub: { val: state.sub.val + 100 } }
    default:
      throw Error('reducer type error')
  }
}
function initFn(initVal) {
  console.log('initFn: ', initVal)
  return initVal
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [state, dispatch] = useReducer(myReducer, initState, initFn)
  const add10 = () => dispatch({ type: 'add10' })
  const add_sub100 = () => dispatch({ type: 'add_sub100' })

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add10}>add10</button>
        <button onClick={add_sub100}>add_sub100</button>
      </div>
      <div>props.num {props.num}</div>
      <div>state {JSON.stringify(state)}</div>
      <ul>
        <li>
          lazy init 函数返回的 state 看来也是 deepClone 了, 各实例不会相互影响
        </li>
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
