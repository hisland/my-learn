const { useState } = React

function Example() {
  console.log('run Example')

  // Declare a new state variable, which we'll call "value"
  const [that, setThat] = useState({
    foo: 1,
    bar: 1,
  })

  return (
    <div>
      <div>foo{that.foo}</div>
      <div>bar{that.bar}</div>
      <button
        onClick={() =>
          setThat((old) => ({ foo: old.foo + 1, bar: old.bar + 1 }))
        }
      >
        Click me
      </button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
