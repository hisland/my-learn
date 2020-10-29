const { useState } = React

function App() {
  console.log('App render')

  return (
    <div>
      <Sub1>
        <div>only 1</div>
      </Sub1>
      <Sub1>
        <div>have 2</div>
        <div>have 2</div>
      </Sub1>
    </div>
  )
}

function Sub1({ children }) {
  console.log('Sub1', children)
  return <div>{children}</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}
