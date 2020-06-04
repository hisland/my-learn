export const preventVSCodeError = 1

class List<T> {
  add(val: T) {}
}

class Animal {
  name: string | undefined
  constructor(name?: string) {
    this.name = name
  }
}
class Cat extends Animal {
  meow() {}
}

const animals = new List<Animal>()
animals.add(new Animal()) // Okay
animals.add(new Cat()) // Okay

const cats = new List<Cat>()
cats.add(new Animal()) // Error
cats.add(new Cat()) // Okay

cats.add({
  name: 'dog',
  meow() {},
}) // Okay
