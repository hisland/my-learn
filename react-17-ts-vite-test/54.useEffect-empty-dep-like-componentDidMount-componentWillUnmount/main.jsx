import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
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
  useEffect(() => {
    console.log('Sub1 useEffect run 空依赖, 这里相当于 componentDidMount()')
    return () => {
      console.log(
        'Sub1 useEffect cancel 空依赖, 这里相当于 componentWillUnmount()'
      )
    }
  }, [])
  return (
    <div style={{ color: 'red' }}>
      <div>render -> useEffect-cancel -> useEffect</div>
      <div>
        每次 render 之后调用 useEffect 回调, 如果它返回了 cancel-fn, 那下次
        render 之后先调上一次的 cancel, 再调用本次的 useEffect 回调
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
