export const preventVSCodeError = 1

{
  interface Ref<T> {
    value: T
  }
  type UnwrapRef<T> = T extends Ref<infer V> ? V : T

  {
    type T0<T> = Ref<UnwrapRef<T>> extends Ref<T> ? 'yes' : 'no'
    type T1 = T0<string> // 'yes'
  }
  {
    type T0<T> = Ref<T> extends Ref<UnwrapRef<T>> ? 'yes' : 'no'
    type T1 = T0<string> // 'yes'
  }

  {
    type T0<T> = Ref<UnwrapRef<T>> extends Ref<T> ? 'yes' : 'no'
    type T1 = T0<Ref<string>> // 'no'
  }
  {
    type T0<T> = Ref<T> extends Ref<UnwrapRef<T>> ? 'yes' : 'no'
    type T1 = T0<Ref<string>> // 'no'
  }
}

{
  interface Ref<T = any> {
    value: T
  }
  type UnwrapRef<T> = T extends Ref<infer V> ? V : T

  {
    type T0<T> = Ref<UnwrapRef<T>> extends Ref<T> ? 'yes' : 'no'
    type T1 = T0<string> // 'yes'
  }
  {
    type T0<T> = Ref<T> extends Ref<UnwrapRef<T>> ? 'yes' : 'no'
    type T1 = T0<string> // 'yes'
  }

  {
    type T0<T> = Ref<UnwrapRef<T>> extends Ref<T> ? 'yes' : 'no'
    type T1 = T0<Ref<string>> // 'no'
  }
  {
    type T0<T> = Ref<T> extends Ref<UnwrapRef<T>> ? 'yes' : 'no'
    type T1 = T0<Ref<string>> // 'no'
  }
}
