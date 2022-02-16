import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('constructor App')
    super(props)
    this.state = {
      obj: {
        some: 1,
      },
    }
  }
  componentDidMount() {
    console.log('componentDidMount App', this.props)
  }
  render() {
    console.log('render App', this.props)
    const { props, state } = this
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              other: Math.random(),
            })
          }}
        >
          setState 触发更新
        </button>
        <div>state.obj.some: {state.obj.some}</div>
        <Sub1 obj={state.obj}></Sub1>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    console.log('constructor Sub1', props)
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('componentDidMount Sub1', this.props)
  }
  render() {
    console.log('render Sub1', this.props)
    const { props, state } = this
    return (
      <div style={{ color: '#000' }}>
        <div style={{ color: 'red' }}>日常不要这样写代码, 这里只是印证想法</div>
        <button
          onClick={() => {
            props.obj.some++
          }}
        >
          add some, 实际值已经被修改, 只是没有触发render, 这就是为什么要
          setState 之类的方法来触发 re-render
        </button>
        <div>props.obj.some: {props.obj.some}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
