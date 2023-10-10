<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { getCurrentInstance } from 'vue'

const vm = getCurrentInstance()
console.log('vm: ', vm)
console.log('sync vm.proxy.$el: ', vm.proxy.$el)
onMounted(() => {
  console.log('onMounted vm.proxy.$el: ', vm.proxy.$el)
})
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px"></div>
</template>
<style scoped lang="less"></style>
