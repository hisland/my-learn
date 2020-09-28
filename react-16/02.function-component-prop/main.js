function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

ReactDOM.render(<Welcome name="func" />, document.getElementById('root'))
