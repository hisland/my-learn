<script setup lang="tsx">
import { ref, reactive, onMounted, computed } from 'vue'
import CompB from './CompB.vue'

const bb = ref(null)
console.log('bb: ', bb);

onMounted(()=>{
  console.log(bb.value.props.url)
})
</script>
<template>
  <div style="border: 1px solid #eee; padding: 10px">
    <div>123</div>
    <div style="height: 300px; border: 1px solid pink">
      <CompB url="test" ref="bb"></CompB>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
