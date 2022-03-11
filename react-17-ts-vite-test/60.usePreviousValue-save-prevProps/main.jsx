import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  const [num, setNum] = useState(1)
  function toggle() {
    setShow(!show)
  }
  function addNum() {
    setNum(num + 1)
  }
  return (
    <div>
      <div>
        <button onClick={toggle}>toggle</button>
        <button onClick={addNum}>addNum</button>
      </div>
      <div>parent num: {num}</div>
      {show && <Sub1 num={num}></Sub1>}
      {show && <Sub2 num={num}></Sub2>}
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
  const prevProps = usePreviousValue(props)
  return (
    <div style={{ color: 'red' }}>
      <div>prevProps: {JSON.stringify(prevProps)}</div>
      <div>props: {JSON.stringify(props)}</div>
    </div>
  )
}

class Sub2 extends Component {
  constructor(props) {
    console.log('Sub2 constructor')
    super(props)
    this.state = { foo: 1, bar: 100 }
  }
  render() {
    console.log('Sub2 render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>props: {JSON.stringify(props)}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
