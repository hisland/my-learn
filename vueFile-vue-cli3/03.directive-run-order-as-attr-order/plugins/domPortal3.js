const directive1 = {
  bind(el, { value }, vnode) {
    console.log('bind 1', el, value, el.parentNode)
  },
  inserted(el, { value }, vnode) {
    console.log('inserted 1', el, value, el.parentNode)
  },
  update(el, { value }) {
    console.log('update 1', el, value)
  },
  componentUpdated(el, { value }) {
    console.log('componentUpdated 1', el, value)
  },
  unbind(el, binding) {
    console.log('unbind 1', el, binding)
  },
}
const directive2 = {
  bind(el, { value }, vnode) {
    console.log('bind 2', el, value, el.parentNode)
  },
  inserted(el, { value }, vnode) {
    console.log('inserted 2', el, value, el.parentNode)
  },
  update(el, { value }) {
    console.log('update 2', el, value)
  },
  componentUpdated(el, { value }) {
    console.log('componentUpdated 2', el, value)
  },
  unbind(el, binding) {
    console.log('unbind 2', el, binding)
  },
}

export { directive1, directive2 }
