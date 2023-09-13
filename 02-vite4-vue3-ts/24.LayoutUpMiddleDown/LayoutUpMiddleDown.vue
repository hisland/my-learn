<script setup lang="ts">
import { onMounted, onUpdated } from 'vue'
import { ref } from 'vue'
</script>
<template>
  <div class="wrap">
    <div class="up">
      <slot name="up"></slot>
    </div>
    <div class="middle">
      <div class="middle2">
        <slot name="middle"></slot>
      </div>
    </div>
    <div class="down">
      <slot name="down"></slot>
    </div>
  </div>
</template>
<style lang="less">
.wrap {
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  > .up {
    // flex: 0 0 auto;
    background-color: pink;
  }
  > .middle {
    // flex: 1 1 0;
    background-color: mistyrose;
    position: relative;
    > .middle2 {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: auto;
    }
  }
  > .down {
    // flex: 0 0 auto;
    background-color: darkseagreen;
  }
}
</style>
