<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const CompA = ref<HTMLDivElement | null>(null)
const abc = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (CompA.value) {
    const shadowRoot = CompA.value.attachShadow({ mode: 'open' })
    console.log('shadowRoot: ', shadowRoot)

    shadowRoot.innerHTML = `

    <style>

  </style>
    <div >child created in shadowRoot 子节点</div>
    <div> 文档在子节点</div>
    <div> 外层的样式不会直接影响 shadowRoot 里面的节点, 此处的字体颜色是继承而来</div>
    <h1>外层样式</h1>

    `
  }
})
</script>
<template>
  <div
    ref="CompA"
    class="CompA"
    style="border: 1px solid purple; padding: 10px"
  >
    <div>没有 slot 这个就没用</div>
  </div>
  <div>外层样式</div>
  <h1>外层样式</h1>
</template>
<style scoped></style>
