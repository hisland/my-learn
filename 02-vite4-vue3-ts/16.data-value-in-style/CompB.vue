<script lang="tsx">
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
  name: 'CompB',
  setup(props, { slots, emit, attrs, expose }) {
    const color = ref('red')

    // expose({
    //   color,
    // })

    return {
      color,
    }
    // return () => {
    //   return (
    //     <div class="compb">
    //       <div class="foo">compb jsx got scoped style {color.value}</div>
    //       <div>
    //         <button
    //           onClick={() => {
    //             color.value = 'red'
    //           }}
    //         >
    //           red
    //         </button>
    //         <button
    //           onClick={() => {
    //             color.value = 'blue'
    //           }}
    //         >
    //           blue
    //         </button>
    //       </div>
    //     </div>
    //   )
    // }
  },
})
</script>
<template>
  <div class="compb">
    <div class="foo">compb jsx got scoped style {{ color }}</div>
    <div>
      <button
        @click="
          () => {
            color = 'red'
          }
        "
      >
        red
      </button>
      <button
        @click="
          () => {
            color = 'blue'
          }
        "
      >
        blue
      </button>
    </div>
  </div>
</template>
<style scoped>
.foo {
  color: v-bind(color);
}
</style>
