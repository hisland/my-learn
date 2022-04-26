import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useRef, useImperativeHandle } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  const ref1 = useRef(null)
  console.log('ref1: ', ref1)
  function toggle() {
    setShow(!show)
  }
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <ul>
        <li>
          useImperativeHandle 有依赖项, 依赖变更才会更新, 注意可能产生陷阱
        </li>
        <li>useImperativeHandle 无依赖项, 每次都会更新</li>
        <li>反正很混乱, 尤其是加上依赖之后, 最好不要这样向父组件传递什么值</li>
      </ul>
      <div>
        <button onClick={toggle}>toggle {show ? 'true' : 'false'}</button>
        <button
          onClick={() => {
            ref1.current.halo()
          }}
        >
          ref1.current.halo {ref1.current && ref1.current.num}
        </button>
      </div>
      <Sub1 ref={ref1} show={show}></Sub1>
    </div>
  )
}

const Sub1 = React.forwardRef(function (props, ref) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(10)
  function add() {
    setNum(num + 1)
  }

  useImperativeHandle(
    ref,
    () => {
      console.log('run useImperativeHandle')
      return {
        num,
        halo: () => {
          console.log(1, props.show, num)
        },
      }
    },
    [props.show] // 有依赖项, 依赖变更才会更新, 无依赖项, 每次都会更新
  )

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add}>add {num}</button>
      </div>
    </div>
  )
})

ReactDOM.render(<App />, document.getElementById('root'))
