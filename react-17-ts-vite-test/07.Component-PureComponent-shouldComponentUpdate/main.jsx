import ReactDOM from 'react-dom'
import React, { Component, PureComponent } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('constructor App')
    super(props)
    this.state = { count1: 0, count2: 0 }
  }
  componentDidMount() {
    console.log('componentDidMount App', this.props)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate App', this.props)
  }
  render() {
    console.log('render App', this.props)
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({ count1: this.state.count1 + 1 })
            }}
          >
            count1 {this.state.count1}
          </button>
          <button
            onClick={() => {
              this.setState({ count2: this.state.count2 + 1 })
            }}
          >
            count2 {this.state.count2}
          </button>
        </div>
        <Sub1 count1={this.state.count1}></Sub1>
        <Sub2 count1={this.state.count1}></Sub2>
        <Sub3 count1={this.state.count1}></Sub3>
      </div>
    )
  }
}

class Sub1 extends PureComponent {
  constructor(props) {
    console.log('constructor Sub1', props)
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('componentDidMount Sub1', this.props)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate Sub1', this.props)
  }
  render() {
    console.log('render Sub1', this.props)
    return (
      <div>
        <p>Sub1 PureComponent, count1 变化我才更新</p>
        <div style={{ color: 'red' }}>sub1 {this.props.count1}</div>
      </div>
    )
  }
}

class Sub2 extends Component {
  constructor(props) {
    console.log('constructor Sub2', props)
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('componentDidMount Sub2', this.props)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate Sub2', this.props)
  }
  render() {
    console.log('render Sub2', this.props)
    return (
      <div>
        <p>Sub2 Component, 父组件 render 我就更新, 不管是否真有值变化</p>
        <div style={{ color: 'red' }}>sub2 {this.props.count1}</div>
      </div>
    )
  }
}

class Sub3 extends Component {
  constructor(props) {
    console.log('constructor Sub3', props)
    super(props)
    this.state = {}
  }
  componentDidMount() {
    console.log('componentDidMount Sub3', this.props)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate Sub3', this.props)
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { props, state } = this
    console.log(
      'shouldComponentUpdate Sub3',
      props,
      state,
      nextProps,
      nextState
    )
    // 必须返回 boolean
    // 返回 true 表示 要更新
    // 返回 false 表示 不更新
    return nextProps.count1 !== props.count1
  }
  render() {
    console.log('render Sub3', this.props)
    return (
      <div>
        <p>Sub3 Component, 通过 shouldComponentUpdate 来判断是否要更新</p>
        <div style={{ color: 'red' }}>sub3 {this.props.count1}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
