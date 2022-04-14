import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'
import { isFunctionExpression } from 'typescript'

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
      <Sub1 num={num}>123 普通值</Sub1>
      <Sub1 num={num}>{'123 表达式值'}</Sub1>
      <Sub1 num={num}>
        {show ? '三元表达式单个 true' : '三元表达式单个 false'}
      </Sub1>
      <Sub1 num={num}>
        {num === 0
          ? '三元表达式组合 zero'
          : num === 1
          ? '三元表达式组合 one'
          : num === 2
          ? '三元表达式组合 true'
          : num === 3
          ? '三元表达式组合 three'
          : 'more'}
      </Sub1>
      <Sub1 num={num}>
        {(() => {
          if (show) {
            return '立即执行函数可以很随意 true1'
          } else {
            return '立即执行函数可以很随意 false1'
          }
        })()}
      </Sub1>
      <Sub1 num={num}>{() => 'children 是单个函数'}</Sub1>
      <Sub1 num={num}>
        {() => 'children 是函数数组'}
        {() => 'children 是函数数组'}
      </Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)

  return <div style={{ border: '1px solid green', margin: '10px' }}></div>
}

ReactDOM.render(<App />, document.getElementById('root'))
