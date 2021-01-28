import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('App constructor')
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    console.log('App render')
    return (
      <div>
        <ul>
          <li>数组数量不一样, 重建</li>
        </ul>

        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <button onClick={this.inc}>inc</button>
          {this.state.count % 3 === 0 && [
            <Sub1 key="1"></Sub1>,
            <Sub1 key="2"></Sub1>,
            <Sub1 key="3"></Sub1>,
          ]}
          {this.state.count % 3 === 1 && [
            <Sub1 key="1"></Sub1>,
            <Sub1 key="2"></Sub1>,
          ]}
          {this.state.count % 3 === 2 && [<Sub1 key="1"></Sub1>]}
        </div>
      </div>
    )
  }
}

class Sub1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { myBar: 33 }
    console.log('Sub1 constructor')
  }
  componentWillUnmount() {
    console.log('Sub1 componentWillUnmount', this.props, this.state)
  }
  componentDidMount() {
    console.log('Sub1 componentDidMount', this.props, this.state)
  }
  render() {
    console.log('Sub1 render')

    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub1</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
