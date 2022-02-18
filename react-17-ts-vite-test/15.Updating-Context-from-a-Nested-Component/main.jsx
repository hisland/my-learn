import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const SomeContext = React.createContext({
  color: 'cyan',
  changeColor: () => {},
})

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      foo: 1,
      color1: {
        color: 'red',
        changeColor: (toColor) => {
          console.log('toColor: ', toColor)
          this.setState((state) => {
            return {
              color1: {
                ...state.color1,
                color: toColor,
              },
            }
          })
        },
      },
      color2: {
        color: 'green',
        changeColor: (toColor) => {
          this.setState((state) => {
            return {
              color2: {
                ...state.color2,
                color: toColor,
              },
            }
          })
        },
      },
    }
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
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
    const { color, changeColor } = this.context
    return (
      <div>
        <div style={{ color: color }}>
          文字
          <button
            onClick={() => {
              changeColor('purple')
            }}
          >
            toggle
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
