<script setup lang="tsx">
import { defineAsyncComponent } from 'vue'
import { onMounted, onUpdated } from 'vue'
import { ref, computed } from 'vue'

const CompA = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if (CompA.value) {
    const shadowRoot = CompA.value.attachShadow({ mode: 'open' })
    console.log('shadowRoot: ', shadowRoot)

    shadowRoot.innerHTML = `

    <slot></slot>

    <div style="background: darkseagreen">child created in shadowRoot</div>
    <div> slot 只有前面的第一个有用</div>

    <slot></slot>

    <hr />
    <slot name="slot2"></slot>
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
    <div style="background: #eee">
      some child, will inject by first slot in shadowRoot
    </div>
    <div slot="slot2">some child in slot2</div>
  </div>
</template>
<style scoped></style>
