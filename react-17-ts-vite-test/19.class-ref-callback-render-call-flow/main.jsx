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
      show: true,
      foo: 1,
    }
  }
  addFoo = () => {
    this.setState({
      foo: this.state.foo + 1,
    })
  }
  toggleSub1 = () => {
    this.setState({
      show: !this.state.show,
    })
  }
  componentDidMount() {
    console.log('App componentDidMount')
  }
  componentDidUpdate() {
    console.log('App componentDidUpdate')
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>
          <button onClick={this.addFoo}>addFoo</button>
          <button onClick={this.toggleSub1}>
            Toggle Sub1 {state.show ? 'true' : 'false'}
          </button>
        </div>
        <ul>
          <li>ref 函数在更新的时候, 会先得到 null, 立即再得到本次的 ref</li>
          <li>组件消失的时候, 得到 null</li>
          <li>
            每次 render
            执行顺序是refCallback(node)-&gt;prevRefCallback(null),refCallback(node)-&gt;prevRefCallback(null),refCallback(node)-prevRefCallback(null)
          </li>
        </ul>
        <div>render -&gt; prevRefCallback(null)? -&gt; refCallback</div>
        {state.show && (
          <Sub1
            ref={(sub1) => {
              this.sub1 = sub1
              console.log('App got sub1 ref', state.foo, sub1)
            }}
          ></Sub1>
        )}
      </div>
    )
  }
}

class Sub1 extends Component {
  constructor(props) {
    console.log('Sub1 constructor', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  render() {
    console.log('Sub1 render', this.props)
    const { state, props } = this
    return <div>文字</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
