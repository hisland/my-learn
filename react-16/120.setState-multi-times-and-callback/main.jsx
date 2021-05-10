import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: 1,
      bar: 1,
    }
    console.log('App constructor')
  }

  setFoo = () => {
    console.log('setFoo 1')
    this.setState({ foo: this.state.foo + 2 }, () => {
      console.log(11, this.state.foo, this.state.bar)
    })
    console.log('setFoo 2')
    this.setState({ bar: this.state.bar + 3 }, () => {
      console.log(22, this.state.foo, this.state.bar)
    })
    console.log('setFoo 3')
  }

  render() {
    console.log('App render')
    const { foo, bar } = this.state

    return (
      <div>
        <ul>
          <li>setState 缓冲合并</li>
          <li>最终修改state之后, 回调函数按顺序调用</li>
          <li>回调函数能得到上一次所有的state变化</li>
        </ul>

        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>App: {foo}</div>
          <div>App: {bar}</div>
          <button onClick={this.setFoo}>setFoo</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
