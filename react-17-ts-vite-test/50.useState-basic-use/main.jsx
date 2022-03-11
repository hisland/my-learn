import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  return (
    <div>
      <Sub1></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(0)
  function add1() {
    setNum(num + 1)
  }
  return (
    <div style={{ color: 'red' }}>
      <div>render 每次执行, 所以东西全部定义</div>
      <div>
        useState 的参数第一次 render 作为初始化, 后续的全部抛弃,
        返回内部保留的状态
      </div>
      <div>useState 返回的 setter 会修改它存储的值, 并且触发 re-render</div>
      <div>add1 函数每次都重建了, 然后赋值给下面的 onClick</div>
      <div>num: {num}</div>
      <div>
        <button onClick={add1}>add</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
