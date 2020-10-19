const { useState, createContext } = React

function App() {
  return (
    <div>
      <Sub1>
        <Sub2></Sub2>
        <Sub2></Sub2>
      </Sub1>
    </div>
  )
}

function Sub1(props) {
  return <>{props.children}</>
}

function Sub2(props) {
  return <div>hello</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
