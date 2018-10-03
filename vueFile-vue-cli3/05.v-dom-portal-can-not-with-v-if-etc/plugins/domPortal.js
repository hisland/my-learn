// 不能与 v-if 这些会操作 dom 的指令一起使用

const holeList = new Map()

function getTarget(node) {
  if (node === true) return document.body
  return node instanceof window.Node ? node : document.querySelector(node)
}

export default {
  inserted(el, { value }, vnode) {
    const holeComment = document.createComment('')
    const orgParent = el.parentNode
    console.log(value)
    if (value) {
      orgParent.insertBefore(holeComment, el)
      getTarget(value).appendChild(el)
    }
    holeList.set(el, { holeComment, orgParent })
  },
  componentUpdated(el, { value }) {
    const { holeComment, orgParent } = holeList.get(el)
    if (value) {
      if (holeComment.parentNode !== orgParent) {
        orgParent.insertBefore(holeComment, el)
      }
      getTarget(value).appendChild(el)
    } else {
      if (holeComment.parentNode === orgParent) {
        orgParent.insertBefore(el, holeComment)
        holeComment.remove()
      }
    }
  },
  unbind(el, binding) {
    const { holeComment, orgParent } = holeList.get(el)
    holeComment.remove()
    el.remove()
    holeList.delete(el)
  },
}
