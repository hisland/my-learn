<template>
  <div>
    <div>App</div>
  </div>
</template>
<script lang="ts">
import { h } from 'vue'

export default {
  setup(props, ctx) {
    return () => {
      return h('div', 'hello 1')
    }
  },
}
</script>
