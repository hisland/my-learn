import React from 'react'
import ReactDOM from 'react-dom'

const { useState, useRef, useEffect } = React

function App(props) {
  console.log('App render')

  const ref1 = useRef(null)

  return (
    <div>
      <ul>
        <li>ref 属性并不是 react 的prop, props.ref 会报提示不能使用</li>
        <li>所以 spread 操作不会继续传给子孙</li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub1 ref={(ref) => (ref1.current = ref)}></Sub1>
      </div>
    </div>
  )
}

class Sub1 extends React.Component {
  constructor(props) {
    super(props)
    console.log('Sub1 constructor')
  }

  render() {
    console.log('Sub1 render', this.props.ref) // 读取报错

    return (
      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>Sub1</div>
        <Sub2
          {...this.props} // 这里是没有把 ref 传下去的
        ></Sub2>
      </div>
    )
  }
}

class Sub2 extends React.Component {
  constructor(props) {
    super(props)
    console.log('Sub2 constructor')
  }

  render() {
    console.log('Sub2 render', this.props.ref)

    return (
      <div>
        <div style={{ border: '1px solid pink', margin: '10px' }}>
          <div>Sub2</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
