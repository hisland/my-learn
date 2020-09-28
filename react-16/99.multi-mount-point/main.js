function Welcome1(props) {
  return <h1>Hello, {props.name}</h1>
}

class Welcome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

ReactDOM.render(<Welcome1 name="func" />, document.getElementById('root1'))
ReactDOM.render(<Welcome1 name="class" />, document.getElementById('root2'))
