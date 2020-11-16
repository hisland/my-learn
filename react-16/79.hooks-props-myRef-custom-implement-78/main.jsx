import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')
  let subEl

  function show() {
    console.log(subEl)
  }

  return (
    <div>
      <ul>
        <li>
          hooks 组件, 把内部某个 el/组件 传出去的自定义方法, 可以定义多个,
          感觉比官方更好用啊
        </li>
        <li>
          完全自定义, 只相当于 ref 的 callback 形式, .current 形式没有兼容
        </li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub1 myRef={(el) => (subEl = el)}></Sub1>

        <button onClick={show}>show myRef</button>
      </div>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  return (
    <div>
      <div>Sub1</div>
      <button ref={props.myRef}>btn</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
