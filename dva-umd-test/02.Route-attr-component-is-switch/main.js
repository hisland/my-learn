console.log('code before')

const { Router, Route, Link, Switch } = dva.router

const Home = () => <div>Hello Home</div>
const Sub = () => <div>Hello Sub</div>

const app = dva({})
window.kkk = app

app.router(({ app, history }) => {
  console.log(app === kkk)
  console.log(history)
  return (
    <Router history={history}>
      <div className="appRoot">
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/sub">sub</Link>
          </li>
        </ul>
        <Route path="/home" component={Home}></Route>
        <Route path="/sub" component={Sub}></Route>
      </div>
    </Router>
  )
})

app.start('#root')

console.log('code after')
