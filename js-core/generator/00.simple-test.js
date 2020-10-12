function* quips(name) {
  console.log('start')
  yield 'hello ' + name + ' !'
  yield 'welcome here!'
  if (name === 'god') {
    yield 'your name is: ' + name + ', that is cool!'
  }
  yield 'bye bye!'
}

const iter = quips('god')
console.log(iter)
{
  const tt = iter.next()
  console.log(tt)
}
{
  const tt = iter.next()
  console.log(tt)
}
{
  const tt = iter.next()
  console.log(tt)
}
{
  const tt = iter.next()
  console.log(tt)
}
{
  const tt = iter.next()
  console.log(tt)
}

for (var vv of range(0, 3)) {
  console.log('this value now is ', vv)
}
function* range(start, stop) {
  for (; start < stop; start++) {
    yield start
  }
}

{
  const tt = range(2, 4)
  console.log(tt.next())
  console.log(tt.next())
  console.log(tt.next())
}
