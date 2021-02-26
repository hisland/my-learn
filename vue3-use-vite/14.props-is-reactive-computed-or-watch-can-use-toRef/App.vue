<template>
  <div>
    <div>App</div>
    <div>
      <button @click="inc_aa">inc_aa</button>
      <button @click="inc_bb">inc_bb</button>
    </div>
    <Sub1 :aa="aa" :bb="bb"> </Sub1>
  </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue'
import { getCurrentInstance } from 'vue'

import Sub1 from './Sub1.vue'
export default {
  components: {
    Sub1,
  },
  setup(props, ctx) {
    const aa = ref(0)
    const bb = ref(0)
    function inc_aa() {
      aa.value++
    }
    function inc_bb() {
      bb.value++
    }
    return {
      aa,
      bb,
      inc_aa,
      inc_bb,
    }
  },
}
</script>
