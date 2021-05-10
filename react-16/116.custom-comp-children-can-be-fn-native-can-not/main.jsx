import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  return (
    <div>
      <ul>
        <li>自定义组件的 children 可以是函数</li>
        <li>React 原生组件不行</li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub>
          {(...args) => {
            console.log('args', args)
            return 'values from children: ' + args.join('_')
          }}
        </Sub>
        <div>{() => <h1>33</h1>}</div>
      </div>
    </div>
  )
}

function Sub(props) {
  const child = props.children('children', 2, 3)
  return (
    <div style={{ border: '1px solid purple', margin: '10px' }}>{child}</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
