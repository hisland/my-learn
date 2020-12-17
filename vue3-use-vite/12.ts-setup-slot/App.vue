<template>
  <div>
    <div>App</div>
    <Sub1 aa="1" bb="2">
      <template v-slot="{ some }">
        <div>slot1 {{ some }}</div>
      </template>
    </Sub1>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, computed } from 'vue'
import { getCurrentInstance } from 'vue'
import { Ref, SetupContext } from 'vue'

import Sub1 from './Sub1.vue'
export default {
  components: {
    Sub1,
  },
  setup(props, ctx) {
    return {
      aa: 1,
    }
  },
}
</script>
