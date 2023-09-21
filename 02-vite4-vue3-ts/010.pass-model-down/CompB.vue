<script lang="tsx">
import { defineComponent } from 'vue'
import CompC from './CompC.vue'

export default defineComponent({
  setup(props, { slots, emit, attrs, expose }) {
    return () => {
      return <CompC {...attrs} v-slots={slots}></CompC>
    }
  },
})
</script>
