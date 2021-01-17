console.log('code before')

const { connect } = dva
const { Router, Route, Link, Switch } = dva.router

const app = dva({})
window.kkk = app

class Parent extends React.Component {
  constructor(props) {
    super(props)
    console.log('Parent:  constructor', props)
    this.state = {}
  }
  render() {
    console.log('Parent: render')
    return (
      <div>
        <Home
          ref={(ref) => {
            console.log(ref.wrappedInstance) // wrappedInstance 就是实际包裹的那个组件实例
            this.thatRef = ref.wrappedInstance
          }}
        ></Home>
      </div>
    )
  }
}

const Home = connect(
  (state) => {
    console.log('connect Home: ', state)
    return {}
  },
  null,
  null,
  { withRef: true } // 这里必须设置才有 wrappedInstance
)(
  class extends React.Component {
    constructor(props) {
      super(props)
      console.log('Home:  constructor', props)
      this.state = { aa: 1 }
    }
    render() {
      console.log('Home: render')
      return (
        <div>
          <div>Hello Home {this.state.aa}</div>
          <div>
            <button
              onClick={() => this.setState((ss) => ({ ...ss, aa: ss.aa + 2 }))}
            >
              add
            </button>
          </div>
        </div>
      )
    }
  }
)

app.router(({ app, history }) => {
  console.log(app === kkk)
  console.log(history)
  return (
    <Router history={history}>
      <div className="appRoot">
        <Parent></Parent>
      </div>
    </Router>
  )
})

app.start('#root')

console.log('code after')
