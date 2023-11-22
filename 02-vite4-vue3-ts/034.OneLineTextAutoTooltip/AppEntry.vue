<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { onMounted } from 'vue'
import OneLineTextAutoTooltip from './OneLineTextAutoTooltip.vue'

onMounted(() => {})
</script>
<template>
  <div class="AppEntry">
    <div style="width: 100px">
      <OneLineTextAutoTooltip
        text="新增多模态 API，包括带视觉功能的 GPT-4 Turbo、图像创建
        （多模态）和新的声音合成模"
      ></OneLineTextAutoTooltip>
    </div>
    <div>
      <OneLineTextAutoTooltip
        text="新增多模态 API，包括带视觉功能的"
      ></OneLineTextAutoTooltip>
    </div>
    <div>
      <OneLineTextAutoTooltip
        text="新增多模态 API，包括带视觉功能的 GPT-4 Turbo、图像创建
        （多模态）和新的声音合成模"
      ></OneLineTextAutoTooltip>
    </div>
  </div>
</template>
<style>
.AppEntry {
}
</style>
