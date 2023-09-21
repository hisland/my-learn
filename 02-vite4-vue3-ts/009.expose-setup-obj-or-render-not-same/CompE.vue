<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CompE',
  setup(props, { slots, emit, attrs, expose }) {
    return {
      aa: 'compe',
    }
  },
})
</script>
<template>
  <div class="compe">compe</div>
</template>
<style scoped>
.foo {
  color: purple;
}
</style>
