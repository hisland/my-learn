function Example() {
  console.log('run Example')

  let some = 1

  return (
    <div>
      <div>some is {some}</div>
      <div>some 变化是不会重新 render 的</div>
      <button
        onClick={() => {
          some = 2
        }}
      >
        Click me
      </button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
