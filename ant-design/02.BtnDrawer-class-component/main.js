const { DatePicker } = antd
const { Button } = antd
const { Input } = antd
const { Drawer } = antd

const { Component } = React

class BtnDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
    }
  }
  showDrawer = () => {
    const { onShow } = this.props
    if (!onShow || (onShow && onShow())) {
      this.setState({ visible: true })
    }
  }
  closeDrawer = () => {
    const { onHide } = this.props
    if (!onHide || (onHide && onHide())) {
      this.setState({ visible: false })
    }
  }
  render() {
    return (
      <>
        <span onClick={this.showDrawer}>{this.props.btn}</span>
        <Drawer
          title="租赁分摊信息新增"
          placement="right"
          closable={false}
          onClose={this.closeDrawer}
          visible={this.state.visible}
          width="350px"
        >
          {this.props.children}
        </Drawer>
      </>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foo: '123',
    }
  }
  onShow = () => true
  onHide = () => true
  render() {
    return (
      <div>
        <BtnDrawer
          btn={<Button>setFoo</Button>}
          onShow={this.onShow}
          onHide={this.onHide}
        >
          <Sub></Sub>
        </BtnDrawer>
      </div>
    )
  }
}
class Sub extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>sub</div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
