interface Named {
  name: string
}

class Person {
  name: string
}

let aa1: Named
// OK, because of structural typing
aa1 = new Person()
console.log(aa1)

let aa2: Named = {
  name: 'wtf',
}
console.log(aa2)
