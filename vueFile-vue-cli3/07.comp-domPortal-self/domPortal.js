export default {
  props: {
    moveTo: {
      type: [String, Boolean],
      default: true,
    },
  },
  render(h) {
    return h('div', [this.$slots.default])
  },
  mounted() {
    this.doMove()
  },
  updated() {
    this.doMove()
  },
  destroyed() {
    this.$el.remove()
  },
  methods: {
    getTarget(node) {
      if (node === true) return document.body
      return node instanceof window.Node ? node : document.querySelector(node)
    },
    doMove() {
      this.getTarget(this.moveTo).appendChild(this.$el)
    },
  },
}
