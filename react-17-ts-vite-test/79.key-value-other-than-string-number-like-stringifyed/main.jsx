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
      keyProp: true,
    }
  }
  toggleBoolean = () => {
    const { state, props } = this
    this.setState({
      keyProp: !state.keyProp,
    })
  }
  set3 = () => {
    this.setState({
      keyProp: 3,
    })
  }
  setNull = () => {
    this.setState({
      keyProp: null,
    })
  }
  setObj = () => {
    this.setState({
      keyProp: {},
    })
  }
  setObj3 = () => {
    this.setState({
      keyProp: { obj1: 3 },
    })
  }
  setObj5 = () => {
    this.setState({
      keyProp: { obj2: 5 },
    })
  }
  setObj6 = () => {
    this.setState({
      keyProp: '[object Object]',
    })
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>type Key = string | number;</div>
        <div>key?: Key | null | undefined;</div>
        <div>
          通过 react 的类型定义, key 的值是 string,number,null,undefined
        </div>
        <div>
          但是这里使用 true/false, 对象 也没报错, 可能是转 string 了,
          空对象多次set, 子组件没有重新 constructor
        </div>
        <div>
          setObj setObj3 setObj5 相互设置, 子组件没有 constructor, 感觉是用的
          字符串连接, 而不是 toJSON
        </div>
        <button onClick={this.toggleBoolean}>toggleBoolean</button>
        <button onClick={this.set3}>set3</button>
        <button onClick={this.setNull}>setNull</button>
        <button onClick={this.setObj}>setObj</button>
        <button onClick={this.setObj3}>setObj3</button>
        <button onClick={this.setObj5}>setObj5</button>
        <button onClick={this.setObj6}>
          字符串 [object Object], 跟前面的 setObj 一样没有变化
        </button>
        <Sub1 key={state.keyProp}></Sub1>
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
