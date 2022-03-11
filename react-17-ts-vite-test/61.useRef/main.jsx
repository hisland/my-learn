import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  const [num, setNum] = useState(1)
  function toggle() {
    setShow(!show)
  }
  function addNum() {
    setNum(num + 1)
  }
  return (
    <div>
      <div>
        <button onClick={toggle}>toggle</button>
        <button onClick={addNum}>addNum</button>
      </div>
      <div>parent num: {num}</div>
      {show && <Sub1 num={num}></Sub1>}
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(1)
  const ref = useRef(num) // num 只有第一次 render 传入有用, 后续的 render 传入的都被扔掉了
  // ref.other = num // ref 只有 current, 不能随便用其它属性, 会报错
  console.log('ref: ', ref)
  function addNum() {
    setNum(num + 1)
  }
  return (
    <div style={{ color: 'red' }}>
      <div>
        <button onClick={addNum}>addNum</button>
      </div>
      <div>ref.current: {ref.current}</div>
      <div>num: {num}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
