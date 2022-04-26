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
          hooks 组件因为没有实例, 父组件无法通过引用调用子组件方法,
          useImperativeHandle 向父组件的 ref 传递一个对象,
          让父组件能调用子组件内部的方法和属性,不过要注意 render 的触发机制
        </li>
        <li>useImperativeHandle 使用多次, 会保留最后一次的结果</li>
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

  useImperativeHandle(ref, () => {
    console.log('run useImperativeHandle')
    return {
      halo2: () => {
        console.log(1, props.show, num)
      },
    }
  })
  // 上面的被替代了, 注意不是合并, 是直接替换
  useImperativeHandle(ref, () => ({
    num,
    halo: () => {
      console.log(2, props.show, num)
    },
  }))

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add}>add {num}</button>
      </div>
    </div>
  )
})

ReactDOM.render(<App />, document.getElementById('root'))
