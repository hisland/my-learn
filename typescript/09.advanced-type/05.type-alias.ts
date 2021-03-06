type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver
function getName(n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// 另一个重要区别是类型别名不能被extends和implements（自己也不能extends和implements其它类型）。
// 因为软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。

// 另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。

type Tree<T> = {
  value: T
  left: Tree<T>
  right: Tree<T>
}

type LinkedList<T> = T & { next: LinkedList<T> | null }
interface Person {
  name: string
}

let people: LinkedList<Person> = {
  name: 'hdl1',
  next: {
    name: 'hdl2',
    next: {
      name: 'hdl3',
      next: null,
    },
  },
}
let s1 = people.name
let s2 = people.next?.name
let s3 = people.next?.next?.name
let s4 = people.next?.next?.next?.name

type Yikes = Array<Yikes> // error

export const preventVSCodeError = 1
