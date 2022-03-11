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
  const [num, setNum] = useState(10)
  function add() {
    setNum(num + 1)
  }
  const isFirstRender = useRef(true)
  console.log('isFirstRender: ', isFirstRender.current)
  useEffect(() => {
    if (isFirstRender.current) {
      console.log('Sub1 useEffect componentDidMount()')
      isFirstRender.current = false
    } else {
      console.log('Sub1 useEffect componentDidUpdate()')
    }
  })
  return (
    <div style={{ color: 'red' }}>
      <div>
        用 useRef 来保存一个值判断是不是第一次 render, 模拟 class 的
        componentDidMount() 和 componentDidUpdate()
      </div>
      <div>num: {num}</div>
      <div>
        <button onClick={add}>add</button>
      </div>
    </div>
  )
}

class Sub2 extends Component {
  constructor(props) {
    console.log('Sub2 constructor')
    super(props)
    this.state = { foo: 1 }
  }
  add = () => {
    const { foo } = this.state
    this.setState({ foo: foo + 1 })
  }
  componentDidMount() {
    console.log('Sub2 componentDidMount')
  }
  componentDidUpdate() {
    console.log('Sub2 componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('Sub2 componentWillUnmount')
  }
  render() {
    console.log('Sub2 render', this.props)
    const { state, props } = this
    const { foo } = state
    return (
      <div>
        <div>
          <button onClick={this.add}>add</button>
        </div>
        <div>foo: {foo}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
