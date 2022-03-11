import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  const [num, setNum] = useState(1)
  const toggle = () => setShow(!show)
  const addNum = () => setNum(num + 1)
  return (
    <div>
      <div>挂载: ref -> componentDidMount</div>
      <div>卸载: componentWillUnmount -> ref</div>
      <div>re-render: ref(null) -> ref(el)</div>
      <div>
        <button onClick={toggle}>toggle</button>
        <button onClick={addNum}>addNum</button>
      </div>
      <div>parent num: {num}</div>
      {show && <Sub1 num={num}></Sub1>}
    </div>
  )
}

class Sub1 extends Component {
  constructor(props) {
    console.log('Sub1 constructor', props)
    super(props)
    this.state = {
      sub: 1,
    }
  }
  componentDidMount() {
    console.log('componentDidMount', this.el, this.sub2)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate', this.el, this.sub2)
  }
  componentWillUnmount() {
    console.log('componentWillUnmount', this.el, this.sub2)
  }
  render() {
    console.log('Sub1 render', this.props)
    const { state, props } = this
    return (
      <div>
        <div
          ref={(el) => {
            console.log('ref callback1', el, this.el)
            this.el = el
          }}
        >
          文字 {props.num}
        </div>
        <Sub2
          ref={(sub2) => {
            console.log('ref callback2', sub2, this.sub2)
            this.sub2 = sub2
          }}
        ></Sub2>
      </div>
    )
  }
}
class Sub2 extends Component {
  constructor(props) {
    console.log('Sub2 constructor', props)
    super(props)
    this.state = {}
  }
  render() {
    console.log('Sub2 render', this.props)
    const { state, props } = this
    return <div>Sub2</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
