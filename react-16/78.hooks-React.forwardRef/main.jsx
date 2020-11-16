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
        <li>hooks 组件, 把内部某个 el/组件 传出去的官方方法</li>
        <li>这是官方方法, 能兼容 ref 的各种使用场景, hooks/class 等等</li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub1 ref={(el) => (subEl = el)}></Sub1>

        <button onClick={show}>show myRef</button>
      </div>
    </div>
  )
}

const Sub1 = React.forwardRef((props, ref) => {
  console.log('Sub1 render', props)
  return (
    <div>
      <div>Sub1</div>
      <button ref={ref}>btn</button>
    </div>
  )
})

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
