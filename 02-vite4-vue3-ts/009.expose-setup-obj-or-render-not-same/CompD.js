import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'CompD',
  setup(props, { slots, emit, attrs, expose }) {
    expose({
      aa: 'compd',
    })

    return () => {
      return h('div', 'dd')
    }
  },
})
