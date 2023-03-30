const { hasOwnProperty: hasOwn } = Object.prototype
export function hasOwnProperty(obj, key) {
  return hasOwn.call(obj, key)
}
