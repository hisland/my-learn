<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    obj: object
  }>(),
  {}
)

watch(props.obj, (newVal) => {
  console.log('1 CompB props.obj newVal: ', newVal)
})

watch(
  () => props.obj,
  (newVal) => {
    console.log('2 CompB () => props.obj newVal: ', newVal)
  },
  // { deep: true }
)
</script>
<template>
  <div
    class="CompBWrap"
    style="border: 1px solid red; padding: 10px; margin: 5px"
  >
    <h1>
      CompB watch props.obj 直接是深层监听, 即watch第1个参数是 reactive 即可
    </h1>
    <h1>CompB watch ()=>props.obj 必须要 deep:true 才是深层监听</h1>
    <pre>{{ props.obj }}</pre>
  </div>
</template>
