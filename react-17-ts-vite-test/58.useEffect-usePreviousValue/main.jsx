import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  function toggle() {
    setShow(!show)
  }
  return (
    <div>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
      {show && <Sub1></Sub1>}
      {show && <Sub2></Sub2>}
    </div>
  )
}

function usePreviousValue(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(1)
  const [bar, setBar] = useState(100)
  function addNum() {
    setNum(num + 1)
  }
  function addBar() {
    setBar(bar + 100)
  }
  const oldNum = usePreviousValue(num)
  const oldBar = usePreviousValue(bar)
  useEffect(() => {
    console.log('Sub1 num', oldNum, num)
  }, [num])
  useEffect(() => {
    console.log('Sub1 bar', oldBar, bar)
  }, [bar])
  return (
    <div style={{ color: 'red' }}>
      <div>usePreviousValue 记住之前的值</div>
      <div>
        num: {num} bar: {bar}
      </div>
      <div>
        <button onClick={addNum}>addNum</button>
        <button onClick={addBar}>addBar</button>
      </div>
    </div>
  )
}

class Sub2 extends Component {
  constructor(props) {
    console.log('Sub2 constructor')
    super(props)
    this.state = { foo: 1, bar: 100 }
  }
  addFoo = () => {
    const { foo } = this.state
    this.setState({ foo: foo + 1 })
  }
  addBar = () => {
    const { bar } = this.state
    this.setState({ bar: bar + 100 })
  }
  componentDidUpdate(prevProps, prevState) {
    const { state, props } = this
    console.log('Sub2 componentDidUpdate')
    if (prevState.foo !== state.foo) {
      console.log('Sub2 foo change', prevState.foo, state.foo)
    }
    if (prevState.bar !== state.bar) {
      console.log('Sub2 bar change', prevState.bar, state.bar)
    }
  }
  render() {
    console.log('Sub2 render', this.props)
    const { state, props } = this
    const { foo, bar } = state
    return (
      <div>
        <div>
          <button onClick={this.addFoo}>addFoo</button>
          <button onClick={this.addBar}>addBar</button>
        </div>
        <div>foo: {foo}</div>
        <div>bar: {bar}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
