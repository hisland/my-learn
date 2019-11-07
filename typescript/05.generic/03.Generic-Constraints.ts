interface Lengthwise {
  length: number
}

function loggingIdentity1<T>(arg: T): T {
  console.log(arg.length)
  return arg
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
  console.log(arg.length) // Now we know it has a .length property, so no more error
  return arg
}

//
// Using Type Parameters in Generic Constraints
//
function create<T>(c: { new (): T }): T {
  return new c()
}

class BeeKeeper {
  hasMask: boolean
}

class ZooKeeper {
  nametag: string
}

class Animal {
  numLegs: number
}

class Bee extends Animal {
  keeper: BeeKeeper
}

class Lion extends Animal {
  keeper: ZooKeeper
}

function createInstance<A>(c: new () => A): A {
  return new c()
}

createInstance(Lion).keeper.nametag // typechecks!
createInstance(Bee).keeper.hasMask // typechecks!

//
// Using Class Types in Generics
//
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a') // okay
getProperty(x, 'm') // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'

export const preventVSCodeError = 1
