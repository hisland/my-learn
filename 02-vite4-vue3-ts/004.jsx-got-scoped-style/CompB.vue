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
      return (
        <div class="compb">
          <div class="foo">compb jsx got scoped style</div>
          <CompC {...attrs} v-slots={slots}></CompC>
        </div>
      )
    }
  },
})
</script>
<style scoped>
.foo {
  color: red;
}
</style>
