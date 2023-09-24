<script setup lang="ts">
import { ref, reactive, onMounted, computed, watch } from 'vue'
import { useStorage } from '@vueuse/core'

const valLocalStorage = useStorage('valLocalStorage', 'default1')
console.log('valLocalStorage: ', valLocalStorage)

const valSessionStorage = useStorage(
  'valSessionStorage',
  'default2',
  sessionStorage
)
console.log('valSessionStorage: ', valSessionStorage)

function setLocalStorage() {
  valLocalStorage.value = Math.random().toString(36).substring(2)
}

function setSessionStorage() {
  valSessionStorage.value = Math.random().toString(36).substring(2)
}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>
      <button @click="setLocalStorage">setLocalStorage</button>
      <button @click="setSessionStorage">setSessionStorage</button>
    </div>
    <div>valLocalStorage: {{ valLocalStorage }}</div>
    <div>valSessionStorage: {{ valSessionStorage }}</div>
  </div>
</template>
<style scoped lang="less"></style>
