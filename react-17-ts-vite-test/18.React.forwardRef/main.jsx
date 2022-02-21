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
  gotRef = (ref) => {
    console.log('gotRef Sub1 的实例引用', ref)
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <Sub1 ref={this.gotRef} anyRenderFn={this.gotRef}></Sub1>
        <Sub2 ref={this.gotRef}></Sub2>
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
    console.log('错误提示, 不能这样拿到 ref 属性', this.props.ref)
    console.log(
      '如果实在需要这个函数, 可以换个名字, 比如 anyRenderFn, 这里其实是一个函数类型的 prop',
      this.props.anyRenderFn
    )
    const { state, props } = this
    return <div>文字</div>
  }
}

const Sub2 = React.forwardRef((props, ref) => {
  console.log('Sub2 render', props)
  console.log('Sub2 ref', ref)
  return <div ref={ref}>这里将 ref 传递下去, 拿到了这个 div DOM 引用</div>
})

ReactDOM.render(<App />, document.getElementById('root'))
