<script setup lang="tsx">
import { useAttrs, useSlots } from 'vue'
import { ref, reactive } from 'vue'
const valc = ref('c-init-value')
</script>
<template>
  <div style="border: 1px solid pink">
    <div>compc {{ valc }}</div>
    <input type="text" v-model="valc" />
    <input
      type="text"
      :value="$attrs.title"
      @input="$attrs['onUpdate:title']?.($event.target.value)"
    />
    <input
      type="text"
      :value="$attrs.foo"
      @input="$attrs['onUpdate:foo']?.($event.target.value)"
    />
  </div>
</template>
