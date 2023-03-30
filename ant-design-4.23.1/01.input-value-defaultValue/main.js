const { DatePicker } = antd
const { Button } = antd
const { Input } = antd

const { Component } = React

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: '123',
    }
  }
  changeText1 = (ee) => {
    console.log(ee)
    console.log(ee.target)
    console.log(ee.target.value)
  }
  changeText2 = (ee) => {
    console.log(ee)
    console.log(ee.target)
    console.log(ee.target.value)
    this.setState({
      foo: ee.target.value,
    })
  }
  render() {
    return (
      <div>
        <div>
          <Input></Input>
        </div>
        <div>
          <Input defaultValue="hello" onChange={this.changeText1}></Input>
        </div>
        <div>
          <Input value={this.state.foo} onChange={this.changeText2}></Input>
        </div>
        <Button>setFoo</Button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
