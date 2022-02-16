import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')

  return (
    <div>
      <a href="https://reactjs.org/docs/react-api.html#cloneelement">
        React.cloneElement
      </a>
      <p>
        做组件的时候渲染列表也许可以用,
        但是其实感觉写一个函数属性返回节点可能更好
      </p>
      <h2>这是使用 React.cloneElement</h2>
      <Sub1>
        <Sub2>halo</Sub2>
      </Sub1>
      <h2>这是文档描述的几乎等价方式, 主要是 ref 处理问题吧</h2>
      <Sub3>
        <Sub2>halo</Sub2>
      </Sub3>
    </div>
  )
}

function Sub1({ children }) {
  console.log('Sub1', React.isValidElement(children), children)
  // 因为这是数组, 所以需要唯一的 key 属性
  const arr = [
    React.cloneElement(children, { key: 'c1' }, 'halo1'),
    React.cloneElement(children, { key: 'c2' }, 'halo2'),
  ]
  return <div style={{ border: '1px solid red', margin: '10px' }}>{arr}</div>
}
function Sub3({ children }) {
  console.log('Sub1', React.isValidElement(children), children)
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <children.type {...children.props}>halo3</children.type>
      <children.type {...children.props}>halo4</children.type>
    </div>
  )
}

function Sub2({ children }) {
  console.log('Sub2')
  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>{children}</div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
