<script lang="tsx">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'CompB',
  data() {
    console.log('data: ', 1)
    const color = ref('red')

    return {
      color,
    }
  },
  setup(props, { slots, emit, attrs, expose }) {
    // console.log('setup: ', 1)
    // const color = ref('red')

    // expose({
    //   color,
    // })

    return () => {
      return (
        <div class="compb">
          <div class="foo">compb jsx got scoped style {this.color.value}</div>
          <div>
            <button
              onClick={() => {
                this.color.value = 'red'
              }}
            >
              red
            </button>
            <button
              onClick={() => {
                this.color.value = 'blue'
              }}
            >
              blue
            </button>
          </div>
        </div>
      )
    }
  },
})
</script>
<style scoped>
.foo {
  color: v-bind(color);
}
</style>
