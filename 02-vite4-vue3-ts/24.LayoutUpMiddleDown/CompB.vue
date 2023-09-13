<script lang="ts">
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

    return {}
  },
})
</script>
<template>
  <div class="compb">
    <div class="up">1</div>
    <div class="middle">2</div>
    <div class="down">3</div>
  </div>
</template>
<style lang="less">
.compb {
  color: red;
}
</style>
