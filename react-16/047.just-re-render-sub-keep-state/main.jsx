const { useState } = React

function App() {
  console.log('App render')

  const [foo, setFoo] = useState(true)

  console.log('App Sub before')
  const sub2 = <Sub2></Sub2>
  console.log('App Sub after')

  return (
    <div>
      <ul>
        <li>每次都返回了 Sub2, 它的状态能保持</li>
        <li>Sub2 会 redner, componentDidUpdate</li>
      </ul>
      <div>
        <button onClick={() => setFoo(!foo)}>setFoo</button>
      </div>
      <div>{sub2}</div>
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
