<template>
  <div class="wrap">
    <slot></slot>
    <div>Sub2 $attrs: {{ $attrs }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    bb: String,
  },
}
</script>
