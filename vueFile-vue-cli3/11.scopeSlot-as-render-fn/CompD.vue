<template>
  <keep-alive v-if="cached">
    <slot></slot>
  </keep-alive>
</template>

<script>
export default {
  props: {
    cached: {
      type: Boolean,
      required: true,
    },
  },
  created() {
    console.log('created CompD')
  },
  mounted() {
    console.log('mounted CompD')
  },
}
</script>

<style>
</style>
