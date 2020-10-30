const { useState } = React

function App() {
  console.log('App render')

  const [count, setCount] = useState(0)
  function toggle() {
    setCount(count + 1)
  }

  return (
    <div>
      <ul>
        <li></li>
      </ul>
      <div>
        <button onClick={toggle}>setCount {count}</button>
      </div>
      <div>
        <Sub2 key={count}></Sub2>
      </div>
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
  componentDidMount() {
    console.log('Sub2 componentDidMount')
  }
  componentDidUpdate() {
    console.log('Sub2 componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('Sub2 componentWillUnmount')
  }
  render() {
    console.log('Sub2 render')
    return (
      <div style={{ padding: '10px', border: '1px solid red' }}>
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
