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
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(10)
  const add10 = () => setNum(num + 10)
  console.log('Sub1 before useMemo')
  const memoValue = useMemo(() => {
    console.log('Sub1 useMemo')
    return 33
  }, [props.num])
  console.log('Sub1 after useMemo')

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add10}>add10</button>
      </div>
      <div>props.num {props.num}</div>
      <div>num {num}</div>
      <div>memoValue {memoValue}</div>
      <ul>
        <li>useMemo 的函数在 render 里面同步执行了</li>
        <li>没有依赖项, 就跟普通同步代码没啥区别</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
