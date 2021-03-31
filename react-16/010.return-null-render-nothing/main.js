function UserGreeting(props) {
  console.log('UserGreeting: ', UserGreeting)
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  console.log('GuestGreeting: ', GuestGreeting)
  return null
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return (
    <div>
      not login <GuestGreeting />
    </div>
  )
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
)
