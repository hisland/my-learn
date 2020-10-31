const { useState, createContext } = React
const { Route, Link, NavLink, Switch } = ReactRouterDOM
const { useRouteMatch } = ReactRouterDOM
// const { BrowserRouter: Router } = ReactRouterDOM
const { HashRouter: Router } = ReactRouterDOM

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <Home>
              <div>home children</div>
            </Home>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home(props) {
  console.log('home', props)
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h2>home</h2>
      <div>{props.children}</div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/home/sub1">Sub1</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home/sub1">
          <Sub1>
            <div>home sub, sub1 children</div>
          </Sub1>
        </Route>
      </Switch>
    </div>
  )
}
function Sub1(props) {
  console.log('sub1', props)
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h3>sub1</h3>
      <div>{props.children}</div>
      <div>
        <button>toggle</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')
