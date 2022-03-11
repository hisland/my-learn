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
  const ref = useRef(null)
  function addNum() {
    setNum(num + 1)
  }
  function gotEl(el) {
    // 每次 render, 上一次的函数都会被调用并且传入 null
    // 看 num 值就知道是上一次的函数
    console.log('Sub1 gotEl', num, el)
  }
  useEffect(() => {
    console.log('Sub1 useEffect', num, ref.current)
    return () => {
      console.log('Sub1 useEffect cancel', num, ref.current)
    }
  })
  return (
    <div style={{ color: 'red' }}>
      <div>
        <button onClick={addNum}>addNum</button>
      </div>
      <div ref={gotEl}>num: {num}</div>
      <div ref={ref}>parentNum: {props.num}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
