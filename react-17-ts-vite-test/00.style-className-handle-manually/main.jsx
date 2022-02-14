import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'

function App() {
  console.log('run App')

  return (
    <div>
      <Sub1 style={{ color: 'red' }} className="halo"></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('run Sub1', props)
  return (
    <div>
      <div>
        style,className 需要自己处理, vue 是组件 style,className
        会自动作用于根元素
      </div>
      <div style={props.style} className={props.className}>
        文字
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
