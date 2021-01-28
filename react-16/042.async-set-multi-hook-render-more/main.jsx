const { useState } = React

function App() {
  console.log('App render')

  const [that1, setThat1] = useState('aa')
  const [that2, setThat2] = useState('bb')
  const [that3, setThat3] = useState('cc')

  function DoSetThat1() {
    setThat1(Math.random().toString(36))
    setThat2(Math.floor(Math.random() * 100))
    setTimeout(() => {
      setThat3(Math.floor(Math.random() * 100))
    }, 10)
  }

  return (
    <div>
      <div>that1: {that1}</div>
      <div>that2: {that2}</div>
      <div>that3: {that3}</div>
      <div>
        <button onClick={DoSetThat1}>DoSetThat1</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
