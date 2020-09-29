const { useState, useEffect } = React

function Example() {
  console.log('run Example every time')

  const [count, setCount] = useState(0)
  console.log(count, setCount)
  const [isLoading, setIsLoading] = useState(true)
  console.log(isLoading, setIsLoading)

  return (
    <div>
      <p>
        You clicked {count} times, {isLoading ? 'true' : 'false'}
      </p>
      <button
        onClick={() => {
          setIsLoading(false)
          setCount(count + 1)
        }}
      >
        Click me
      </button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))

console.log('run code after')
