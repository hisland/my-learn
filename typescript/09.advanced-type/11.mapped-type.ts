type Nullable<T> = { [P in keyof T]: T[P] | null }
type Readonly<T> = { readonly [P in keyof T]: T[P] }
type Partial<T> = { [P in keyof T]?: T[P] }

interface Person {
  name: string
  age: number
}

type PersonNullable = Nullable<Person>
type PersonPartial = Partial<Person>
type ReadonlyPerson = Readonly<Person>

type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }

export const preventVSCodeError = 1
