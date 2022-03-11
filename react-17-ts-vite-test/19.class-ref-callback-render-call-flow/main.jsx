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
  addFoo = () => {
    this.setState({
      foo: this.state.foo + 1,
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
        </div>
        <div>render -> prevRefCallback(null)? -> refCallback</div>
        <Sub1
          ref={(sub1) => {
            this.sub1 = sub1
            console.log('App got sub1 ref', sub1)
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
