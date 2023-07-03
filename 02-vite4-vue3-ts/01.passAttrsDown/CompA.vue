<script setup lang="tsx">
import CompB from './CompB.vue'
function test() {
  console.log('test CompA: ')
}
</script>
<template>
  <div>
    <div>compa</div>
    <CompB aa="1" :bb="2" @evt1="test" v-on:evt2="test" :onEvt3="test"> </CompB>
  </div>
</template>
