import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const outside = document.getElementById('outside')

function App(props) {
  console.log('App render')

  const pp = ReactDOM.createPortal(
    <div>
      <div>some thing</div>
      <div>here in jsx</div>
      <Sub1></Sub1>
    </div>,
    outside
  )

  function handleClick(ee) {
    console.log(ee.target)
  }

  return (
    <div onClick={handleClick}>
      <ul>
        <li>ReactDOM.createPortal 在其它地方渲染组件</li>
        <li>虽然在其它地方渲染, 但是 DOM事件冒泡 还是处理回来了</li>
      </ul>

      {pp}
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render')

  return (
    <div>
      <div>sub1</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
