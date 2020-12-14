<template>
  <Sub2>
    <div>inheritAttrs 默认 true, 会自动传给根元素, 如果是另外的组件, 它就能接收到</div>
    <div>不管怎样, Sub1 始终能拿到 $attrs: {{ $attrs }}</div>
  </Sub2>
</template>
<script>
import Sub2 from './Sub2.vue'

export default {
  inheritAttrs: false,
  components: {
    Sub2,
  },
  props: {
    aa: String,
  },
}
</script>
