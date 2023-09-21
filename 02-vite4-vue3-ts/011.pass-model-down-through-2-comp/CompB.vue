<script lang="tsx">
import { defineComponent } from 'vue'
import CompD from './CompD.vue'

export default defineComponent({
  setup(props, { slots, emit, attrs, expose }) {
    return () => {
      return <CompD {...attrs} v-slots={slots}></CompD>
    }
  },
})
</script>
