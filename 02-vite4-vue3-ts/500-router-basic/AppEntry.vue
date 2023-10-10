<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

function setRef1() {}
function setReactive1() {}
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div style="border: 1px solid pink; padding: 10px">
      <div>
        <RouterLink to="/">/</RouterLink>
      </div>
      <div>
        <RouterLink to="/about">/about</RouterLink>
      </div>
    </div>

    <div style="border: 1px solid purple; padding: 10px">
      <RouterView></RouterView>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
./store1
