<template>
  <div>
    <div>Sub1</div>
    <div>props 是 reactive 对象 aa: {{ aa }} bb: {{ bb }}</div>
    <div>监听或者computed, 可以用 toRef, 例如: {{ val_dep_aa }}</div>
  </div>
</template>
<script lang="ts">
import { ref, toRef, onMounted, computed, watch } from 'vue'
import { isReactive, getCurrentInstance } from 'vue'
import { Ref, SetupContext } from 'vue'

export default {
  props: {
    aa: Number,
    bb: Number,
  },
  setup(props, { attrs, slots, emit, expose }) {
    console.log('props 是 reactive 对象', isReactive(props))
    watch(toRef(props, 'bb'), (val, oldVal) => {
      console.log('props.bb changed', val, oldVal)
    })

    const val_dep_aa = computed(() => {
      return toRef(props, 'aa').value + ' hello'
    })

    return {
      val_dep_aa,
    }
  },
}
</script>
