import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const SomeContext = React.createContext('cyan')

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      foo: 1,
      color1: 'red',
      color2: 'green',
    }
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ color1: 'purple' })}>
            color1 purple
          </button>
          <button onClick={() => this.setState({ color1: 'blue' })}>
            color1 blue
          </button>
          <button onClick={() => this.setState({ color1: 'pink' })}>
            color1 pink
          </button>
        </div>
        <div>
          <button onClick={() => this.setState({ color2: 'purple' })}>
            color2 purple
          </button>
          <button onClick={() => this.setState({ color2: 'blue' })}>
            color2 blue
          </button>
          <button onClick={() => this.setState({ color2: 'pink' })}>
            color2 pink
          </button>
        </div>
        <div style={{ color: 'red' }}>
          value 传 undefined 也是不会导致消费到默认值的, 只有不包裹
          SomeContext.Provider 才行
        </div>
        <SomeContext.Provider value={state.color1}>
          <Sub1></Sub1>
          <SomeContext.Provider value={state.color2}>
            {
              // 获得最近嵌套的值
              <Sub1></Sub1>
            }
          </SomeContext.Provider>
        </SomeContext.Provider>
        <div style={{ margin: '10px', border: '1px solid red' }}>
          <div>这里外层没有包裹 SomeContext.Provider, 它能取到默认值</div>
          <div style={{ color: 'red' }}>
            默认值并不是说 SomeContext.Provider 可以不传 value, value 是必传的
          </div>
          <Sub1></Sub1>
        </div>
      </div>
    )
  }
}

class Sub1 extends Component {
  static contextType = SomeContext // 这个指定了内部的 this.context 才有值
  constructor(props) {
    console.log('Sub1 constructor', props)
    super(props)
    console.log('Sub1 constructor 1 context', this.context) // 还没有
    this.state = {
      sub: 1,
    }
    console.log('Sub1 constructor 2 context', this.context) // 还没有
  }
  render() {
    console.log('Sub1 render', this.props, this.context) // 这里有
    const { state, props } = this
    return <div style={{ color: this.context }}>文字</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
