const { useState, useEffect } = React

function Example() {
  console.log('run Example')

  const [count, setCount] = useState(0)

  console.log('before useEffect')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('run useEffect')

    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
  })

  console.log('after useEffect')

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
