const { useState } = React

function App() {
  console.log('App render')

  const [foo, setFoo] = useState()

  console.log('App Sub before')
  const sub2 = (
    <Sub1>
      <Sub2></Sub2>
    </Sub1>
  )
  console.log('App Sub after')

  return (
    <div>
      <ul>
        <li>父组件调用 Sub2, 传给子组件直接使用</li>
      </ul>
      <div>
        <button onClick={() => setFoo(!foo)}>setFoo {foo}</button>
      </div>
      <div>{sub2}</div>
    </div>
  )
}

function Sub1({ children }) {
  console.log('Sub1 render')
  const [count, setCount] = useState(true)
  return (
    <div>
      <div>
        <button onClick={() => setCount(!count)}>setCount {count}</button>
      </div>
      <div>{count ? children : ''}</div>
    </div>
  )
}

class Sub2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bar: 'init',
    }
    console.log('Sub2 constructor')
  }
  render() {
    console.log('Sub2 render')
    return (
      <div>
        <div>
          <button
            onClick={() => this.setState({ bar: Math.random().toString(36) })}
          >
            setBar
          </button>
        </div>
        <div>Sub2 {this.state.bar}</div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
