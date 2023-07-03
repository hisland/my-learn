<script lang="ts">
import { h, defineComponent } from 'vue'

export default defineComponent({
  name: 'CompB',
  setup(props, { slots, emit, attrs, expose }) {
    expose({
      aa: 'compb',
    })

    return () => {
      return h('div', 'aa')
    }
  },
})
</script>
<style scoped>
.foo {
  color: red;
}
</style>
