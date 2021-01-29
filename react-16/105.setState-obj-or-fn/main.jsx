import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { foo: 1 }
    console.log('App constructor')
  }
  setFoo1 = () => {
    const { foo } = this.state
    this.setState({ foo: foo + 1 })
  }
  setFoo2 = () => {
    const { foo } = this.state
    this.setState((state, props) => {
      console.log('App setFoo2', state, props)
      return {
        foo: state.foo + 2,
      }
    })
  }
  render() {
    console.log('App render')
    const { foo } = this.state
    return (
      <div>
        <ul></ul>

        <div>
          <div>foo: {foo}</div>
          <button onClick={this.setFoo1}>setFoo1 updater obj</button>
          <button onClick={this.setFoo2}>setFoo2 updater fn</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App some="pp" />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
