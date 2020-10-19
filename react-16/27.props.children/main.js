const { useState, createContext } = React

function App() {
  return (
    <Sub1>
      <div>some 1</div>
      <div>some 2</div>
    </Sub1>
  )
}

function Sub1(props) {
  console.log(props)
  return (
    <div>
      <div>yes</div>
      <div>{props.children}</div>
      <div>
        <button onClick={() => setShow(!Show)}>toggle</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
