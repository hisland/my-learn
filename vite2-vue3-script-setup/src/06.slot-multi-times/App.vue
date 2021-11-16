<script setup>
import Sub from "./Sub.vue";
</script>

<template>
  <div>
    <Sub>
      <template v-slot="props">
        <div>default slot {{ props }}</div>
      </template>
      <template v-slot:hey="props">
        <div>hey slot {{ props }}</div>
      </template>
    </Sub>
  </div>
</template>
