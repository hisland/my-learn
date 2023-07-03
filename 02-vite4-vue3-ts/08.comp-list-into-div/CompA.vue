<script lang="tsx">
import { defineComponent } from 'vue'
import CompB from './CompB.vue'

export default defineComponent({
  setup(props, { slots, emit, attrs, expose }) {
    const list = [<CompB>11</CompB>, <CompB>22</CompB>, <CompB>33</CompB>]
    return () => {
      return <div>{list}</div>
    }
  },
})
</script>
