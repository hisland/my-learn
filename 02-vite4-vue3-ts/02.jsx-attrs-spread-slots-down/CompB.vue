<script lang="tsx">
import { defineComponent } from 'vue'
import CompC from './CompC.vue'

export default defineComponent({
  name: 'CompB',
  setup(props, { slots, emit, attrs, expose }) {
    console.log('CompB props, { slots, emit, attrs }: ', props, {
      slots,
      emit,
      attrs,
      expose,
    })
    console.log('CompB attrs: ', attrs)

    return () => {
      return <CompC b1="1" b2={2} {...{ b3: 1 }} {...attrs}></CompC>
      // return <CompC v-slots={slots}></CompC> // 可以
      // return <CompC>{slots}</CompC> // 可以
    }
  },
})
</script>
