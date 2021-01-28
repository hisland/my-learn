const { useState } = React

function App() {
  console.log('run App')

  const [that, setThat] = useState({ foo: 1 })

  function setSame() {
    setThat(that)
  }

  function setNew() {
    setThat({ foo: Math.random().toString(36) })
  }

  return (
    <div>
      <div>that.foo: {that.foo}</div>
      <div>
        <button onClick={setSame}>setSame, 相同引用, 不触发</button>
        <button onClick={setNew}>setNew</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
