export const preventVSCodeError = 1

{
  interface Ref<T = any> {
    value: T
  }

  type F1<T> = T extends Ref ? T : Ref<null>

  type f1 = F1<Ref<string>>
  type f2 = F1<string>
}

type Foo<T = string> = {
  name: string
  next: T
}

{
  type F2 = Foo<number> extends Foo ? number : string
  type F4 = Foo<number> extends Foo<string> ? number : string

  type F3 = Foo<number> extends Foo<number> ? number : string
  type F5 = Foo<number> extends Foo<any> ? number : string
  type F6 = Foo<any> extends Foo<number> ? number : string
}

{
  type F2 = number extends Foo ? number : string
  type F4 = number extends string ? number : string

  type F3 = number extends number ? number : string
  type F5 = number extends any ? number : string
  type F6 = any extends number ? number : string
}

{
  type T1<U, K> = U extends K ? 'yes' : 'no'

  type t1 = T1<Array<string>, object>
}

// type T2 = (number extends any) ? number : string
// type T3 = (any extends number) ? number : string

// type T4 = (Foo<number> extends Foo<number>) ? number : string
// type T5 = (Foo<number> extends Foo<any>) ? number : string
// type T6 = (Foo<any> extends Foo<number>) ? number : string

{
  {
    type F1 = number extends any ? 'yes' : 'no'
  }
  {
    type F1 = string extends any ? 'yes' : 'no'
  }
  {
    type F1 = boolean extends any ? 'yes' : 'no'
  }
  {
    type F1 = null extends any ? 'yes' : 'no'
  }
  {
    type F1 = undefined extends any ? 'yes' : 'no'
  }
  {
    type F1 = never extends any ? 'yes' : 'no'
  }
  {
    type F1 = void extends any ? 'yes' : 'no'
  }
  {
    type F1 = never extends any ? 'yes' : 'no'
  }
}

{
  let aa1: any = 33
  aa1 = 33
  aa1 = 'str'
  aa1 = true
  aa1 = null
  aa1 = undefined
}

{
  let aa1: any = 33
  let aa2: number = aa1
  let aa3: string = aa1
  let aa4: boolean = aa1
  let aa5: null = aa1
  let aa6: undefined = aa1
  let aa7: never = aa1
  let aa8: unknown = aa1
  let aa9: void = aa1
}

{
  let aa1: any = 33
  let aa2: number = aa1
  let aa3: string = aa1
  let aa4: boolean = aa1
  let aa5: null = aa1
  let aa6: never = aa1
  let aa7: unknown = aa1
  let aa8: void = aa1
}

{
  let aa1: any = 33
  let aa2: number = aa1
  let aa3: string = aa1
  let aa4: boolean = aa1
  let aa5: null = aa1
  let aa6: never = aa1
  let aa7: unknown = aa1
  let aa8: void = aa1

  {
    type F1 = string extends any ? 'yes' : 'no'
  }
  {
    type F1 = boolean extends any ? 'yes' : 'no'
  }
  {
    type F1 = null extends any ? 'yes' : 'no'
  }
  {
    type F1 = undefined extends any ? 'yes' : 'no'
  }
  {
    type F1 = never extends any ? 'yes' : 'no'
  }
  {
    type F1 = void extends any ? 'yes' : 'no'
  }
  {
    type F1 = any extends never ? 'yes' : 'no'
  }
  {
    type F1 = unknown extends any ? 'yes' : 'no'
  }
}

{
  type T1 = string[]
  type KEYS = keyof T1
  type T2 = T1[number]
}

{
  type T1 = Array<string>
  type KEYS = keyof T1
  type T2 = T1[number]
}

{
  type T1 = number[]
  type T2 = T1[number]

  type BoxedValue<T> = { value: T }
  type BoxedArray<T> = { array: T[] }
  type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>

  type T20 = Boxed<string> // BoxedValue<string>;
  type T21 = Boxed<number[]> // BoxedArray<number>;
  type T22 = Boxed<string | number[]> // BoxedValue<string> | BoxedArray<number>;
}
