import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

let prevProps

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  function Inc() {
    setFoo(foo + 1)
  }

  return (
    <div>
      <ul>
        <li>组件每次拿到的 props 都是新组装的对象, 所以每次都会 render</li>
      </ul>
      <div>
        <button onClick={Inc}>Inc</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub1 foo={foo}></Sub1>
        <Sub2 foo={foo}></Sub2>
      </div>
    </div>
  )
}

class Sub2 extends React.Component {
  render() {
    console.log('Sub2 render')
    console.log('prevProps === this.props', prevProps === this.props)
    prevProps = this.props
    return <div>Sub1</div>
  }
}

function Sub1(props) {
  console.log('Sub1 render')
  console.log('prevProps === props', prevProps === props)
  prevProps = props
  return <div>Sub1</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
