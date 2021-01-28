function UserGreeting(props) {
  return (
    <React.Fragment>
      <h1>Hello User1 !</h1>
      <h1>Hello User2 !</h1>
    </React.Fragment>
  )
}

// fragment short syntax
function GuestGreeting(props) {
  return (
    <>
      <h1>Hello Guest1 !</h1>
      <h1>Hello Guest2 !</h1>
    </>
  )
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item) => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

function Greeting(props) {
  return (
    <div>
      <UserGreeting />
      <GuestGreeting />
      <Glossary
        items={[
          { id: '1', term: 'aa 1', description: 'aad 1' },
          { id: '2', term: 'aa 2', description: 'aad 2' },
          { id: '3', term: 'aa 3', description: 'aad 3' },
        ]}
      ></Glossary>
    </div>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
