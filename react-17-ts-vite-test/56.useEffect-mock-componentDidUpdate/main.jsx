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
  const isFirstRender = useRef(true)
  console.log('isFirstRender: ', isFirstRender.current)
  useEffect(() => {
    console.log('useEffect 1')
    if (isFirstRender.current) {
      // console.log('Sub1 useEffect componentDidMount()')
      isFirstRender.current = false
    } else {
      // console.log('Sub1 useEffect componentDidUpdate()')
    }
  })
  const oldNum = useRef(num)
  const oldBar = useRef(bar)
  useEffect(() => {
    console.log('useEffect 2')
    // 这里实际上并不准确, 因为是引用传递的对象, 上面修改了, 这里立马能得到最新值
    if (!isFirstRender.current) {
      console.log('Sub1 num', oldNum.current, num)
      oldNum.current = num
    }
  }, [num])
  useEffect(() => {
    console.log('useEffect 3')
    if (!isFirstRender.current) {
      console.log('Sub1 bar', oldBar.current, bar)
      oldBar.current = bar
    }
  }, [bar])
  return (
    <div style={{ color: 'red' }}>
      <div>模拟 componentDidUpdate, 并记住之前的值</div>
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
