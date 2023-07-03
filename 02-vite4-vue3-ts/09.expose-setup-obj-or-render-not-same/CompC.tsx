import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CompC',
  setup(props, { slots, emit, attrs, expose }) {
    expose({
      aa: 'compc',
    })

    return () => {
      return (
        <div class="compc">
          <div class="foo">compc jsx got scoped style</div>
        </div>
      )
    }
  },
})
