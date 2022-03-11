import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  function toggle() {
    setShow(!show)
  }
  return (
    <div>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
      {show && <Sub1></Sub1>}
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
    console.log('Sub1 useEffect run')
    return () => {
      console.log('Sub1 useEffect cancel')
    }
  })
  return (
    <div style={{ color: 'red' }}>
      <div>render -> useEffect-cancel -> useEffect</div>
      <div>
        每次 render 之后调用 useEffect 回调, 如果它返回了 cancel-fn, 那下次
        render 之后先调上一次的 cancel, 再调用本次的 useEffect 回调
      </div>
      <div>组件卸载的时候会调上一次的 cancel</div>
      <div>它相当于 componentDidMount() componentDidUpdate() 的合体</div>
      <div>num: {num}</div>
      <div>
        <button onClick={add}>add</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
