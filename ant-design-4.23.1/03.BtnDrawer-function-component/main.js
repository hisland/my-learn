const { DatePicker } = antd
const { Button } = antd
const { Input } = antd
const { Drawer } = antd

const { Component } = React

function BtnDrawer({ children, btn, onShow, onHide }) {
  const [visible, setVisible] = React.useState(false)
  const showDrawer = () => {
    if (!onShow || (onShow && onShow())) {
      setVisible(true)
    }
  }
  const closeDrawer = () => {
    if (!onHide || (onHide && onHide())) {
      setVisible(false)
    }
  }
  return (
    <>
      <span onClick={showDrawer}>{btn}</span>
      <Drawer
        title="租赁分摊信息新增"
        placement="right"
        closable={false}
        onClose={closeDrawer}
        visible={visible}
        width="350px"
      >
        {children}
      </Drawer>
    </>
  )
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
