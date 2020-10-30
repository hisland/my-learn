const { useState, Component } = React

function App() {
  console.log('App render')

  const [obj, set_obj] = useState({ some: 'value' })
  function SetSameObj() {
    set_obj(obj)
  }
  function SetNewObjSameValue() {
    set_obj({ some: 'value' })
  }

  return (
    <div>
      <ul>
        <li>hooks 如果引发 render, 后台也会全部 render</li>
        <li>不管它是 class, 还是 hooks</li>
      </ul>
      <div style={{ padding: '10px', border: '1px solid green' }}>
        <button onClick={SetSameObj}>SetSameObj {obj.some}</button>
        <button onClick={SetNewObjSameValue}>
          SetNewObjSameValue {obj.some}
        </button>
      </div>
      <Sub1></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render')
  return (
    <div style={{ padding: '10px', border: '1px solid green' }}>
      <Sub2></Sub2>
    </div>
  )
}

class Sub2 extends Component {
  constructor(props) {
    super(props)
    console.log('Sub2 constructor')
  }
  render() {
    console.log('Sub2 render')
    return (
      <div style={{ padding: '10px', border: '1px solid green' }}>
        <Sub3></Sub3>
      </div>
    )
  }
}

function Sub3(props) {
  console.log('Sub3 render')
  return <div style={{ padding: '10px', border: '1px solid cyan' }}>Sub3</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
