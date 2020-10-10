const { useState, useEffect } = React

function Example() {
  console.log('run Example')

  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('run useEffect 1')

    // Update the document title using the browser API
    document.title = `You clicked ${count} times 1`

    return () => {
      console.log('clean useEffect 1')
    }
  })
  useEffect(() => {
    console.log('run useEffect 2')

    // Update the document title using the browser API
    document.title = `You clicked ${count} times 2`

    return () => {
      console.log('clean useEffect 2')
    }
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
