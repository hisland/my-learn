import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { FC } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

class App extends Component {
  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      foo: 1,
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
                'aa.bb': 2,
              })
            }}
          >
            set aa.bb, 实际上整体作为 key 了
          </button>
        </div>
        <div>state: {JSON.stringify(state)}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
