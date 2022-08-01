import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

const SomeContext = React.createContext('cyan')
const FooContext = React.createContext('foo')

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
        <SomeContext.Provider value={state.color1}>
          <FooContext.Provider value={state.color2}>
            <Sub1></Sub1>
            <Sub2></Sub2>
          </FooContext.Provider>
        </SomeContext.Provider>
      </div>
    )
  }
}

function Sub1(props) {
  console.log('Sub1 render', props)
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <SomeContext.Consumer>
        {(some) => (
          <FooContext.Consumer>
            {(foo) => (
              <div>
                <div>这里能同时读取到 2 个 context, 使用 Context.Consumer</div>
                <div>
                  some: {some} foo: {foo}
                </div>
              </div>
            )}
          </FooContext.Consumer>
        )}
      </SomeContext.Consumer>
    </div>
  )
}

function Sub2(props) {
  console.log('Sub2 render', props)
  const some = useContext(SomeContext)
  const foo = useContext(FooContext)
  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <div>这里能同时读取到 2 个 context, 使用 useContext</div>
        <div>
          some: {some} foo: {foo}
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
