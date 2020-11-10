import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

let prevProps
let prevState

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  function Inc() {
    setFoo(foo + 1)
  }

  return (
    <div>
      <ul>
        <li>shouldComponentUpdate 返回 false, 阻止 re-render</li>
        <li>state 始终是同一个</li>
      </ul>
      <div>
        <button onClick={Inc}>Inc</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub2 foo={foo}></Sub2>
      </div>
    </div>
  )
}

class Sub2 extends React.Component {
  state = {}
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState)
    return nextProps.foo % 2 === 1
  }
  render() {
    console.log('Sub2 render')
    console.log('prevProps === this.props', prevProps === this.props)
    console.log('prevState === this.state', prevState === this.state)
    prevProps = this.props
    prevState = this.state
    return <div>Sub1 {this.props.foo}</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
