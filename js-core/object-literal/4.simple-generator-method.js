// generator 简写

const obj = {
  *m() {
    yield 'hello world'
  },
}

const it = obj.m()
console.log(it.next())
