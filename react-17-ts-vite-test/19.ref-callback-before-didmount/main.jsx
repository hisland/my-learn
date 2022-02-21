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
        <Sub1
          ref={(ref) => {
            this.sub1 = ref
            console.log('App got sub1 ref')
          }}
        ></Sub1>
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
