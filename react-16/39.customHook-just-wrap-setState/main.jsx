const { useState } = React

function useSomeThing(initialState) {
  const [that, setThat] = useState(initialState)
  return [that, setThat]
}

function App() {
  console.log('run App')

  const [that1, setThat1] = useSomeThing('aa')
  const [that2, setThat2] = useSomeThing('bb')

  function DoSetThat1() {
    setThat1(Math.random().toString(36))
  }
  function DoSetThat2() {
    setThat2(Math.floor(Math.random() * 100))
  }

  return (
    <div>
      <div>that1: {that1}</div>
      <div>that2: {that2}</div>
      <div>
        <button onClick={DoSetThat1}>DoSetThat1</button>
        <button onClick={DoSetThat2}>DoSetThat2</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
