<script lang="tsx">
import { defineComponent } from 'vue'
import CompC from './CompC.vue'

export default defineComponent({
  setup(props, { slots, emit, attrs, expose }) {
    console.log('slots: ', slots)
    const slot2 = {
      default: (slotProps) => {
        console.log('default args: ', slotProps)
        return <div>1 slotProps 至少是 空对象 不会为 null undefined</div>
      },
      slotb: (slotProps) => {
        console.log('default args: ', slotProps)
        return (
          <div>
            2 {slotProps.val1} {slotProps.foo1}
          </div>
        )
      },
      slotc: (slotProps) => {
        console.log('default args: ', slotProps)
        return <div>3</div>
      },
    }
    return () => {
      return <CompC {...attrs} v-slots={slot2}></CompC>
    }
  },
})
</script>
