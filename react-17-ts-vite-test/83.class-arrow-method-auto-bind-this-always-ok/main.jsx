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
    this.method3 = this.method1.bind(this)
  }
  method1(ee) {
    console.log(this, 'method1', ee)
  }
  method2 = (ee) => {
    console.log(this, 'method2', ee)
  }
  render() {
    console.log('App render', this.props)
    const { state, props } = this
    return (
      <div>
        <div>
          <div>直接绑定</div>
          <div onClick={this.method1}>method1 this不正确</div>
          <div onClick={this.method2}>method2 this正确</div>
          <div onClick={this.method3}>method3 this正确</div>
        </div>
        <div>
          <div>间接绑定</div>
          <div onClick={(ee) => this.method1(ee)}>method1 this正确</div>
          <div onClick={(ee) => this.method2(ee)}>method2 this正确</div>
          <div onClick={(ee) => this.method3(ee)}>method3 this正确</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
