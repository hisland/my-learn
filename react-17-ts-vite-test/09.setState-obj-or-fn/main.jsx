import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('constructor App')
    super(props)
    this.state = {
      foo: 1,
    }
  }
  render() {
    console.log('render App', this.props)
    return (
      <div>
        <Sub1 foo={this.state.foo}></Sub1>
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    console.log('constructor Sub1', props)
    super(props)
    this.state = {
      sub: 10,
    }
  }
  add5 = () => {
    this.setState((state, props) => ({
      sub: state.sub + 5,
    }))
  }
  add6 = () => {
    const { state, props } = this
    this.setState({
      sub: state.sub + 6,
    })
  }
  render() {
    console.log('render Sub1')
    const { state, props } = this
    return (
      <div>
        <div>parent foo: {props.foo}</div>
        <div>sub: {state.sub}</div>
        <div>
          <button
            onClick={() => {
              this.setState({
                sub: this.state.sub + 1,
              })
            }}
          >
            add sub 1, 全部从 this 读取, 很繁琐
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState({
                sub: this.state.sub + 2,
              })
            }}
          >
            add sub 2, 使用 render 作用域解构出来的 state,props, 好多代码是这种
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState((state, props) => {
                return {
                  sub: state.sub + 3,
                }
              })
            }}
          >
            add sub 3, setState updater 函数带出 state,props, 不常用
          </button>
        </div>
        <div>
          <button onClick={this.add5}>add sub 5, 实例函数1, 方便</button>
        </div>
        <div>
          <button onClick={this.add6}>
            add sub 6, 实例函数2, 跟5差不多, 应该是最多的使用形式
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              this.setState((state, props) => ({
                sub: state.sub + 4,
              }))
            }}
          >
            add sub 4 上一个的简单形式
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
