interface Hello {
  foo: string
  bar: Hello.Bar
}

namespace Hello {
  export interface Bar {
    name: string
  }
}

let ss1: Hello = {
  foo: 'foo',
  bar: {
    name: 'yes1',
  },
}
let ss2: Hello.Bar = {
  name: 'yes2',
}
