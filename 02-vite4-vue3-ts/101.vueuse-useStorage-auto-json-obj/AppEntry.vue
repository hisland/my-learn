<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useStorage } from '@vueuse/core'

const valLocalStorage = useStorage('valLocalStorage', {
  some: 'default1',
})
console.log('valLocalStorage: ', valLocalStorage)

function setLocalStorage() {
  valLocalStorage.value = {
    some: Math.random().toString(36).substring(2) + '中文',
  }
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>
      <button @click="setLocalStorage">setLocalStorage</button>
    </div>
    <div>valLocalStorage: {{ valLocalStorage }}</div>
  </div>
</template>
<style scoped lang="less"></style>
