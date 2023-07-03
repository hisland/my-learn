<script lang="tsx">
import { defineComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'CompB',
  setup(props, { slots, emit, attrs, expose }) {
    console.log('CompB setup: ')
    const color = ref('red')

    onMounted(() => {
      console.log('CompB onMounted 1: ')
    })
    onMounted(() => {
      console.log('CompB onMounted 2: ')
    })
    onUpdated(() => {
      console.log('CompB onUpdated 1: ')
    })
    onUpdated(() => {
      console.log('CompB onUpdated 2: ')
    })

    return () => {
      console.log('CompB render: ')
      return (
        <div class="compb">
          <div class="foo">color: {color.value}</div>
          <div>
            <button
              onClick={() => {
                color.value = 'red'
              }}
            >
              red
            </button>
            <button
              onClick={() => {
                color.value = 'blue'
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
