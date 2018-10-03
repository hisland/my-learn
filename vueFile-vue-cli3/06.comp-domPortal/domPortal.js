function getTarget(node) {
  if (node === true) return document.body
  return node instanceof window.Node ? node : document.querySelector(node)
}

export default {
  data() {
    return {
      movedOne: null,
    }
  },
  props: {
    moveTo: [String, Boolean],
  },
  render(h) {
    return h('div', [this.$slots.default])
  },
  mounted() {
    console.log('domPortal: mounted: ')
    if (this.moveTo) {
      this.doMove()
    }
  },
  updated() {
    console.log('domPortal: updated: ')

    if (this.moveTo) {
      this.doMove()
    } else {
      this.restore()
    }
  },
  destroyed() {
    console.log('domPortal: destroyed: ')
    this.restore()
  },
  methods: {
    doMove() {
      if (!this.movedOne) {
        this.movedOne = this.$el.children[0]
      }
      getTarget(this.moveTo).appendChild(this.movedOne)
    },
    restore() {
      if (this.movedOne) {
        this.$el.appendChild(this.movedOne)
      }
    },
  },
}
