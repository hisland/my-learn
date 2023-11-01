<script setup lang="ts">
import CompB from './CompB.vue'
const list1 = [1, 2, 3]
const list2 = list1.filter((vv) => vv > 10)
</script>
<template>
  <div class="AppEntry">
    <h1>
      slot3 pass noting by chance, CompB use fallback Content, is that right?
    </h1>
    <CompB>
      <template #slot1>
        <div style="border: 2px solid purple; padding: 10px; margin: 5px">
          content from parent 1
        </div>
      </template>
      <template #slot2>
        <div v-for="(vv0, index0) in list1" :key="index0">{{ vv0 }}</div>
      </template>
      <template #slot3>
        <div v-for="(vv0, index0) in list2" :key="index0">{{ vv0 }}</div>
      </template>
    </CompB>
  </div>
</template>
