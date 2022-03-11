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
  const [num, setNum] = useState(10)
  function add1() {
    setNum((oldVal) => oldVal + 1)
  }
  function add2() {
    setNum(num + 2)
  }
  return (
    <div style={{ color: 'red' }}>
      <div>
        useState 参数是函数时, 不是说值是函数, 而是第一次会运行它,
        并将返回值作为 初始值, 后续这个函数就永远被抛弃
      </div>
      <div>num: {num}</div>
      <div>
        <button onClick={add1}>
          add1 更新函数的第一个参数值是 num 的当前值, 不依赖作用域
        </button>
      </div>
      <div>
        <button onClick={add2}>add2 借助作用域取到 num</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
