<template>
  <div>
    <div>Sub1</div>
    <div>props.aa: {{ aa }}</div>
    <div>props.bb: {{ bb }}</div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { getCurrentInstance } from 'vue'
import { Ref, SetupContext } from 'vue'

export default {
  props: {
    aa: Number,
    bb: Number,
  },
  setup(props, { attrs, slots, emit, expose }) {
    watch(
      () => props.aa,
      (val, oldVal) => {
        console.log('props.aa changed', val, oldVal)
      }
    )
    watch(
      () => props.bb,
      (val, oldVal) => {
        console.log('props.bb changed', val, oldVal)
      }
    )
    return {}
  },
}
</script>
