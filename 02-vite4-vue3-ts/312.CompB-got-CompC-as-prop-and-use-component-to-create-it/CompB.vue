<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import type { Ref } from 'vue'

const props = withDefaults(
  defineProps<{
    ref1: any
    cc: any
    ccProps: any
  }>(),
  {}
)

function showProps() {
  console.log('CompB showProps: ', props)
}

onMounted(() => {
  console.log('CompB onMounted 1: ')
})
</script>
<template>
  <div class="wrap" style="border: 1px solid purple; padding: 10px">
    CompB
    <div style="color: red">传递 ref1 给 slot</div>
    <button @click="showProps">showProps</button>
    <div>{{ ref1 }}</div>

    <component :is="cc" v-bind="ccProps"></component>
  </div>
</template>
<style scoped lang="less"></style>
