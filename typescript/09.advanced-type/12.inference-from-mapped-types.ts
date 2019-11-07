type Proxy<T> = {
  get(): T
  set(value: T): void
}
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>
}
function proxify<T>(o: T): Proxify<T> {
  let result = {} as Proxify<T>
  return result
}

let proxyProps = proxify({ a: 1 })

function unproxify<T>(t: Proxify<T>): T {
  let result = {} as T
  for (const k in t) {
    result[k] = t[k].get()
  }
  return result
}

let originalProps = unproxify(proxyProps)
