const { useState, useEffect } = React

function Example() {
  console.log('run Example every time')

  const [count, setCount] = useState(0)
  console.log('Example: ', count, setCount)
  const [isLoading, setIsLoading] = useState(true)
  console.log('Example: ', isLoading, setIsLoading)

  return (
    <div>
      <p>
        You clicked {count} times, {isLoading ? 'true' : 'false'}
      </p>
      <div>我刷新要把下级一起刷新</div>
      <button
        onClick={() => {
          setIsLoading(false)
          setCount(count + 1)
        }}
      >
        Click me
      </button>
      <div>
        <SubComp></SubComp>
      </div>
    </div>
  )
}

function SubComp() {
  console.log('run SubComp every time')

  const [count, setCount] = useState(0)
  console.log('SubComp: ', count, setCount)
  const [isLoading, setIsLoading] = useState(true)
  console.log('SubComp: ', isLoading, setIsLoading)

  return (
    <div>
      <p>
        You clicked {count} times, {isLoading ? 'true' : 'false'}
      </p>
      <div>我刷新只管我自己</div>
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
