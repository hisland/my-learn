<template>
  <div>
    <template v-for="vv in list">
      <slot :vv="vv" name="renderItem"></slot>
    </template>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 3, 5],
    }
  },
  props: {},
}
</script>

<style>
</style>
