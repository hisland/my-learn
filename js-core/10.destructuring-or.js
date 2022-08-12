{
  const aa = {
    foo: 1,
  }
  const bb = {
    foo: 2,
  }

  const { foo } = aa || bb
  console.log(foo) // 1
}
{
  const aa = null
  const bb = {
    foo: 2,
  }

  const { foo } = aa || bb
  console.log(foo) // 2
}

console.log('先对 or 进行求值, 再进行解构')

