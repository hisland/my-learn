import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useRef, useImperativeHandle } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  const [num, setNum] = useState(1)
  const ref1 = useRef()
  function toggle() {
    setShow(!show)
  }
  function add1() {
    setNum(num + 1)
  }
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <ul>
        <li>
          执行顺序是 prevRefCallback -&gt; sub-useImperativeHandle -&gt;
          refCallback
        </li>
        <li>
          跟 class 组件里面类似, 也是先 prevRefCallback(null), 再
          refCallback(result-of-useImperativeHandle)
        </li>
        <li>也遵从 useImperativeHandle 的 deps 更新策略</li>
      </ul>
      <div>
        <button onClick={add1}>add1 {num}</button>
        <button onClick={toggle}>toggle {show ? 'true' : 'false'}</button>
        <button
          onClick={() => {
            ref1.current.halo()
          }}
        >
          ref1.current.halo {ref1.current && ref1.current.num}
        </button>
      </div>
      {show && (
        <Sub1
          ref={(sub1) => {
            ref1.current = sub1
            console.log('App got sub1 ref', num, sub1)
          }}
          show={show}
        ></Sub1>
      )}
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
    // [props.show] // 有依赖项, 依赖变更才会更新, 无依赖项, 每次都会更新
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
