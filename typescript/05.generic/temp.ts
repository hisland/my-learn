// type UnwrapRef<T> = {
//   cRef: T extends ComputedRef<infer V> ? UnwrapRef<V> : T
//   ref: T extends Ref<infer V> ? UnwrapRef<V> : T
//   array: T extends Array<infer V> ? Array<UnwrapRef<V>> : T
//   object: { [K in keyof T]: UnwrapRef<T[K]> }
// }[T extends ComputedRef<any>
//   ? 'cRef'
//   : T extends Ref
//     ? 'ref'
//     : T extends Array<any>
//       ? 'array'
//       : T extends Function | CollectionTypes
//         ? 'ref' // bail out on types that shouldn't be unwrapped
//         : T extends object ? 'object' : 'ref']

// function isRef(r: any): r is Ref {
//   return 'abc'
// }
// interface Ref<T = any> {
//   _isRef: true
//   value: T
// }

// const aa = isRef(3)
// console.log(aa)

// const aa: Ref<number> = {
//   _isRef: true,
//   value: 3,
// }
// console.log(aa)

// type oo = {
//   nRef: number
//   sRef: string
// }

// type aa = oo.nRef

// let yes: aa = 3
// console.log(yes)

class Bird {
  fly() {
    console.log('fly')
  }
  layEggs() {
    console.log('layEggs')
  }
}

class Fish {
  swim() {
    console.log('swim')
  }
  layEggs() {
    console.log('layEggs')
  }
}

function getSmallPet(): Fish | Bird {
  return Math.random() < 0.5 ? new Fish() : new Bird()
}

let pet = getSmallPet()

// 使用类型断言, 但是太过冗余繁杂
if ((<Fish>pet).swim) {
  ;(<Fish>pet).swim()
} else {
  ;(<Bird>pet).fly()
}

// 使用类型断言, 但是太过冗余繁杂, as 方式
if ((pet as Fish).swim) {
  ;(pet as Fish).swim()
} else {
  ;(pet as Bird).fly()
}

export const preventVSCodeError = 1
