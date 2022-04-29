import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  function toggle() {
    setShow(!show)
  }
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
      {() => {
        console.log('App js')
        return <div>这个函数没有执行是不行的, 开发模式控制台会有错误提示</div>
      }}
      {(() => {
        console.log('App js')
        const val = 33
        return <div>立即执行的代码段返回结果, 可以局部变量 {val}</div>
      })()}
      {[1].map((vv) => {
        const val = 33
        return (
          <div key={vv}>
            正确的表达式也行, 这里是随便一个数组的 map, 可以局部变量 {val} {vv},
            只是 map 返回的是数组, 要加 key 属性
          </div>
        )
      })}
      {show && (
        <div>
          <Sub1
            propFn={() => {
              return (
                <div>
                  这是 React 官方讲的 render-prop,
                  其实跟子children是函数是一样的
                </div>
              )
            }}
          >
            {() => {
              return <div>传递给子组件的函数, 子组件要调用才行</div>
            }}
          </Sub1>
        </div>
      )}
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(10)
  function add() {
    setNum(num + 1)
  }

  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add}>add {num}</button>
      </div>
      {typeof props.children === 'function' ? props.children() : props.children}
      {typeof props.propFn === 'function' ? props.propFn() : props.propFn}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
