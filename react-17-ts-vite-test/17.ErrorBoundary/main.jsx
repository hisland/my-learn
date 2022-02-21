import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      foo: 1,
    }
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <ErrorBoundary>
          <Sub1></Sub1>
        </ErrorBoundary>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    console.log('Sub1 constructor', props)
    super(props)
    this.state = {
      foo: 1,
    }
  }
  clickTriggerError = () => {
    throw Error('this error do not trigger error boundary')
  }
  addFoo1 = () => {
    this.setState((state) => ({
      foo: state.foo + 1,
    }))
  }
  render() {
    console.log('Sub1 render', this.props)
    const { state, props } = this
    if (state.foo > 5) {
      throw Error('foo is greater than 5')
    }
    return (
      <div>
        <div>
          <button onClick={this.clickTriggerError}>
            产生事件错误, 不会被 error boundary 处理
          </button>
        </div>
        <div>
          <button onClick={this.addFoo1}>addFoo1, 超过5 render 会报错</button>
        </div>
        <div>foo: {state.foo}</div>
      </div>
    )
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    console.log('ErrorBoundary constructor', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  static getDerivedStateFromError(error) {
    console.log('error getDerivedStateFromError: ', error)
    return {
      someError: true,
    }
  }
  componentDidCatch(error, errorInfo) {
    console.log('error componentDidCatch: ', error, errorInfo)
  }
  render() {
    const { state, props } = this
    console.log('ErrorBoundary render', state, props)
    if (state.someError) {
      return <div>出错了</div>
    }
    return props.children
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
