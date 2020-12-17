<template>
  <div>
    <div>Sub1</div>
    <slot some="pass up"></slot>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, computed } from 'vue'
import { getCurrentInstance } from 'vue'
import { Ref, SetupContext } from 'vue'

export default {
  props: {
    aa: String,
  },
  setup(props, { attrs, slots, emit, expose }) {
    console.log(props)
  },
}
</script>
