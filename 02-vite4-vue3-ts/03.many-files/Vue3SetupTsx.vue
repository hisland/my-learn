<script setup lang="tsx">
import { Message } from '@arco-design/web-vue'

function say() {
  Message.info({
    content: () => {
      return <div>say</div>
    },
  })
}
</script>
<template>
  <div>
    <div>11</div>
    <div>
      <button @click="say">cc2</button>
    </div>
  </div>
</template>
