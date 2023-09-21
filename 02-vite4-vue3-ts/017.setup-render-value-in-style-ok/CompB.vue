<script lang="tsx">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'CompB',
  setup(props, { slots, emit, attrs, expose }) {
    const color = ref('red')

    return {
      color,
    }
  },
  render() {
    return (
      <div class="compb">
        <div class="foo">compb jsx got scoped style {this.color}</div>
        <div>
          <button
            onClick={() => {
              this.color = 'red'
            }}
          >
            red
          </button>
          <button
            onClick={() => {
              this.color = 'blue'
            }}
          >
            blue
          </button>
        </div>
      </div>
    )
  },
})
</script>
<style scoped>
.foo {
  color: v-bind(color);
}
</style>
