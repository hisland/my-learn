import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  constructor(props) {
    console.log('constructor App')
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    console.log('componentDidMount App', this.props)
  }
  render() {
    console.log('render App', this.props)
    return (
      <div>
        <Sub1 style={{ color: 'red' }}></Sub1>
      </div>
    )
  }
}

class Sub1 extends Component {
  static propTypes = {
    style: PropTypes.object,
  }
  static defaultProps = {}
  constructor(props) {
    console.log('constructor Sub1', props)
    super(props)
    this.state = { date: new Date() }
  }
  componentDidMount() {
    console.log('componentDidMount Sub1', this.props)
  }
  render() {
    console.log('render Sub1', this.props)
    return <div style={this.props.style}>文字</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
