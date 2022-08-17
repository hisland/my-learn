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
    this.rr = [React.createRef(), React.createRef()]
    window.kkk = this
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({
                foo: state.foo + 1,
              })
            }}
          >
            add1
          </button>
        </div>
        <div>in App rr0 {this.rr[0].current && this.rr[0].current.state.sub}</div>
        <div>in App rr1 {this.rr[1].current && this.rr[1].current.state.sub}</div>
        <Sub1 ref={this.rr[0]}></Sub1>
        <Sub1 ref={this.rr[1]}></Sub1>
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
    return (
      <div>
        <div>文字 {state.sub}</div>
        <div>
          <button
            onClick={() => {
              this.setState({
                sub: state.sub + 1,
              })
            }}
          >
            add1
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
