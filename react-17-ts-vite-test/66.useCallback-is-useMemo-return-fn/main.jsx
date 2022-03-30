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
  console.log('Sub1 before useCallback')
  const cbValue = useCallback(() => {
    console.log('Sub1 useCallback')
    return { num: num, parentNum: props.num }
  }, [props.num])
  console.log('Sub1 after useCallback')

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add10}>add10</button>
      </div>
      <div>props.num {props.num}</div>
      <div>num {num}</div>
      <div>
        cbValue() {JSON.stringify(cbValue())},
        <span style={{ color: 'red' }}>
          注意 add10 此处无变化, 因为 deps 里面没有依赖 num
        </span>
      </div>
      <ul>
        <li>
          理解 useMemo 再理解 useCallback 相对容易, 因为 useCallback(fn, deps)
          相当于 useMemo(() => fn, deps)
        </li>
        <li>
          本质上, useCallback 的 fn 每次都创建了, 只是如是依赖没变化,
          创建即被抛弃, 返回的是上一次创建的函数, 如此,
          它内部的变量全是创建当时的状态
        </li>
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
