function loggingIdentity1<T>(arg: T): T {
  console.log(arg.length) // Error: T doesn't have .length
  return arg
}

interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length) // Now we know it has a .length property, so no more error
  return arg
}

interface Findable<T> {
  length: T
}
// Using Type Parameters in Generic Constraints
// In some cases, it may be useful to declare a type parameter that is constrained by another type parameter. For example,
// XXXXXXXXXXXXXXXXXXXXXError
function find1<T, U extends Findable<T>>(n: T, s: U) {
  // errors because type parameter used in constraint
  // ...
}
// find (giraffe, myAnimals);

// You can achieve the pattern above by replacing the type parameter with its constraint. Rewriting the example above,

function find<T>(n: T, s: Findable<T>) {
  // ...
}
// find(giraffe, myAnimals);

// Using Class Types in Generics
// When creating factories in TypeScript using generics, it is necessary to refer to class types by their constructor(构造函数) functions. For example,

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

function findKeeper<A extends Animal, K>(a: {
  new (): A
  prototype: { keeper: K }
}): K {
  return a.prototype.keeper
}

findKeeper(Lion).nametag // typechecks!

export const preventVSCodeError = 1
