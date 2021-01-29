import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { foo: 1 }
    console.log('App constructor')
  }
  setAppFoo = () => {
    this.setState((state) => ({
      foo: state.foo + 1,
    }))
  }
  render() {
    console.log('App render')
    const { foo } = this.state
    return (
      <div>
        <ul>
          <li>PureComponent props/state 没有变化不会 re-render</li>
        </ul>

        <div>
          <div>App foo: {foo}</div>
          <button onClick={this.setAppFoo}>setAppFoo</button>
          <Sub1></Sub1>
          <Sub1 propDontChange={33}></Sub1>
          <Sub1 propChange={foo}></Sub1>
        </div>
      </div>
    )
  }
}

class Sub1 extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { foo: 1, rnd: Math.random().toString(36).substr(2, 8) }
    console.log('Sub1 constructor')
  }
  setSubFoo = () => {
    const { foo } = this.state
    if (Math.random() < 0.5) {
      this.setState({ foo: foo + 1 })
    } else {
      console.log('dont change foo, no re-render')
    }
  }
  render() {
    const { foo, rnd } = this.state
    console.log('Sub1 render', rnd)
    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub1 foo: {foo}</div>
          <div>Sub1 rnd id: {rnd}</div>
          <div>Sub1 props: {JSON.stringify(this.props)}</div>
          <button onClick={this.setSubFoo}>setSubFoo</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
