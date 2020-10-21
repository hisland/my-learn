const { DatePicker } = antd
const { Button } = antd

const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <Button>setFoo</Button>
        <Button type="primary">setFoo</Button>
        <DatePicker></DatePicker>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
