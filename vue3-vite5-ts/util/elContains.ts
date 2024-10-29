export function elContains(
  el: Element | null,
  otherEl: Element | null,
  sameAsContains: boolean = false
) {
  if (!el || !otherEl) {
    return false
  }
  if (el === otherEl) {
    return sameAsContains
  }
  if (el.compareDocumentPosition) {
    return (el.compareDocumentPosition(otherEl) & 16) === 16
  }
  if (el.contains) {
    return el.contains(otherEl)
  }
  return false
}
