window.holeList = new Map()

const directive1 = {
  bind(el, { value }, vnode) {
    console.log('bind 1', el, value, el.parentNode)
  },
  inserted(el, { value }, vnode) {
    console.log('inserted 1', el, value)
    const hole = document.createComment('')
    const orgParent = el.parentNode
    if (value) {
      orgParent.insertBefore(hole, el)
      document.querySelector(value).appendChild(el)
    }
    holeList.set(el, { hole, orgParent })
  },
  update(el, { value }) {
    console.log('update 1', el, value)
  },
  componentUpdated(el, { value }) {
    const { hole, orgParent } = holeList.get(el)
    if (value) {
      if (hole.parentNode !== orgParent) {
        orgParent.insertBefore(hole, el)
      }
      document.querySelector(value).appendChild(el)
    } else {
      if (hole.parentNode === orgParent) {
        orgParent.insertBefore(el, hole)
      }
    }
  },
  unbind(el, binding) {
    console.log('unbind 1', el, binding)
    const { hole, orgParent } = holeList.get(el)
    hole.remove()
    el.remove()
    holeList.delete(el)
  },
}
const directive2 = {
  bind(el, { value }, vnode) {
    console.log('bind 2', el, value, el.parentNode)
  },
  inserted(el, { value }, vnode) {
    console.log('inserted 2', el, value, el.parentNode)
    document.querySelector('#hole2').appendChild(el)
  },
  update(el, { value }) {
    console.log('update 2', el, value)
  },
  componentUpdated(el, { value }) {
    console.log('componentUpdated 2', el, value, el.parentNode)
    document.querySelector('#hole2').appendChild(el)
  },
  unbind(el, binding) {
    console.log('unbind 2', el, binding)
  },
}

export { directive1, directive2 }
