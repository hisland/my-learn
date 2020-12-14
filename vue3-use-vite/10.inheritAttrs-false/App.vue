<template>
  <div class="wrap">
    <div>我传入任意几个 prop</div>
    <Sub1 aa="1" bb="some" :cc="true"></Sub1>
  </div>
</template>
<script>
import Sub1 from './Sub1.vue'
export default {
  components: {
    Sub1,
  },
}
</script>
