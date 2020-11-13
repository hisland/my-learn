export function omit(obj, keys) {
  if (!keys || !keys.length) return obj
  if (typeof keys === 'string') keys = [keys]
  const rsObj = {}
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      rsObj[key] = obj[key]
    }
  }
  return rsObj
}

export function genUidFactory(prefix = 'tmp-key') {
  let uidCount = 0
  return () => `${prefix}-${uidCount++}`
}
