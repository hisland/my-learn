<script setup lang="ts">
import LayoutUpMiddleDown from './LayoutUpMiddleDown3.vue'
import CompB from './CompB.vue'
</script>
<template>
  <div class="compa">
    <LayoutUpMiddleDown>
      <template #up>
        <div>abc</div>
      </template>
      <div
        style="
          width: 200px;
          height: 100%;
          overflow: auto;
          background-color: cornflowerblue;
        "
      >
        <div v-for="(vv0, index0) in 30" :key="index0">aa</div>
      </div>
      <template #down>
        <div>abc</div>
      </template>
    </LayoutUpMiddleDown>
  </div>
</template>
<style scoped>
.compa {
  width: 300px;
  height: 500px;
  background-color: #eee;
}
</style>
