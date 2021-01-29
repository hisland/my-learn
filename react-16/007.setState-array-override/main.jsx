import React, { Component, PureComponent } from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [1, 2, 3],
    }
    window.kkk = this
  }

  set1() {
    this.setState({
      arr: [33],
    })
  }

  set2() {
    this.setState({
      arr: ['a', , 'c'],
    })
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.set1()
            }}
          >
            set1
          </button>
          <button
            onClick={() => {
              this.set2()
            }}
          >
            set2
          </button>
        </div>
        <h1>Hello, {this.state.arr.join('--')}!</h1>
      </div>
    )
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))
