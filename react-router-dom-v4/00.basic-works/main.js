const { useState, createContext } = React
const { Route, Link, NavLink, Switch } = ReactRouterDOM
// const { BrowserRouter: Router } = ReactRouterDOM
const { HashRouter: Router } = ReactRouterDOM

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sub1">Sub1</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact>
            <Home>
              <div>home children</div>
            </Home>
          </Route>
          <Route path="/sub1">
            <Sub1>
              <div>sub1 children</div>
            </Sub1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home(props) {
  console.log('home', props)
  return (
    <div className="home">
      <h2>home</h2>
      <div>{props.children}</div>
      <div>
        <button>toggle</button>
      </div>
    </div>
  )
}
function Sub1(props) {
  console.log('sub1', props)
  return (
    <div className="sub1">
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
