import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <div>同名 prop, 直接是覆盖, 并不是合并, 需要自己处理合并逻辑</div>
      <Sub1 style={{ background: 'green' }}></Sub1>
      <Sub2 style={{ background: 'green' }}></Sub2>
    </div>
  )
}

function Sub1(props) {
  return (
    <div
      style={{ width: '300px', background: 'red', height: '100px' }}
      {...props}
    >
      <div>{'...props'} 在后面, 覆盖了 style</div>
    </div>
  )
}

function Sub2(props) {
  return (
    <div
      {...props}
      style={{ width: '300px', background: 'red', height: '100px' }}
    >
      <div>{'...props'} 在前面, style 被后来的属性覆盖了</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
