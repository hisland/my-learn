import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

const SomeContext = React.createContext({ color1: 'cyan' })

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      foo: 100,
    }
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.setState({
                foo: state.foo + 1,
              })
            }}
          >
            update App {state.foo}
          </button>
        </div>
        <SomeContext.Provider
          value={{
            color1: 'blue',
          }}
        >
          <Sub1></Sub1>
        </SomeContext.Provider>
      </div>
    )
  }
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [foo, set_foo] = useState(1)
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <div>
        <button
          onClick={() => {
            set_foo(foo + 10)
          }}
        >
          update Sub1 {foo}
        </button>
      </div>
      <Sub2></Sub2>
    </div>
  )
}

function Sub2(props) {
  console.log('Sub2 render', props)
  const some = useContext(SomeContext)
  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        不管是 App re-render 还是 Sub1 re-render, Sub2 都能拿到 SomeContext 的值
      </div>
      <div>
        <div>some: {some.color1}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
