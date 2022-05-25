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
        <ul>
          <li>跟 Vue 不一样, children 传下去的时候, 实际并没有初始化</li>
          <li>
            只有在 render tree 里面真实存在的时候, 它才会 constructor, 第 2 次
            render 还在则会 componentDidUpdate
          </li>
          <li>
            如果某次 render tree 已经不存在了, 会 componentWillUnmount,
            以后再出现的时候, 重新 constructor
          </li>
        </ul>
        <Sub1>
          <Sub2></Sub2>
        </Sub1>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    console.log('Sub1 constructor', props)
    super(props)
    this.state = {
      show: false,
      count: 1,
    }
  }
  componentDidMount() {
    console.log('Sub1 componentDidMount')
  }
  componentWillUnmount() {
    console.log('Sub1 componentWillUnmount')
  }
  componentDidUpdate() {
    console.log('Sub1 componentDidUpdate')
  }
  render() {
    console.log('Sub1 render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>
          Sub1 1
          <button
            onClick={() => {
              this.setState({
                show: !state.show,
              })
            }}
          >
            toggle {state.show ? 'true' : 'false'}
          </button>
          <button
            onClick={() => {
              this.setState({
                count: state.count + 1,
              })
            }}
          >
            count {state.count}
          </button>
        </div>
        {state.show && props.children}
        <div>Sub1 2</div>
      </div>
    )
  }
}

class Sub2 extends Component {
  constructor(props) {
    console.log('Sub2 constructor', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  componentDidMount() {
    console.log('Sub2 componentDidMount')
  }
  componentWillUnmount() {
    console.log('Sub2 componentWillUnmount')
  }
  componentDidUpdate() {
    console.log('Sub2 componentDidUpdate')
  }
  render() {
    console.log('Sub2 render', this.props)
    const { state, props } = this
    return <div>Sub2 文字</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
