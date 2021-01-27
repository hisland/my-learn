import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      show: true,
    }
    console.log('App constructor')
  }
  inc = () => {
    this.setState({ count: this.state.count + 5 })
  }
  toggle = () => {
    this.setState({ show: !this.state.show })
  }
  render() {
    console.log('App render')
    return (
      <div>
        <ul>
          <li>
            Sub1 setState, 并且触发了父组件的 prop 修改, 最终只 render 一次
          </li>
        </ul>

        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <button onClick={this.inc}>inc</button>
          <button onClick={this.toggle}>toggle</button>
          {this.state.show && <Sub1 count={this.state.count}></Sub1>}
        </div>
      </div>
    )
  }
}

class Sub1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { myBar: 33 }
    console.log('Sub1 constructor')
  }
  componentWillUnmount() {
    console.log('Sub1 componentWillUnmount', this.props, this.state)
  }
  componentDidMount() {
    console.log('Sub1 componentDidMount', this.props, this.state)
  }
  UNSAFE_componentWillMount() {
    console.log('Sub1 UNSAFE_componentWillMount', this.props, this.state)
  }
  UNSAFE_componentWillUpdate() {
    console.log('Sub1 UNSAFE_componentWillUpdate', this.props, this.state)
  }
  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    console.log(
      'Sub1 UNSAFE_componentWillReceiveProps',
      nextProps,
      this.props,
      nextContext
    )
  }
  setBar = () => {
    this.setState({ myBar: this.state.myBar + 3 })
  }
  render() {
    console.log('Sub1 render')

    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub1 props.count: {this.props.count}</div>
          <div>Sub1 state.myBar: {this.state.myBar}</div>
          <button onClick={this.setBar}>setBar</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
