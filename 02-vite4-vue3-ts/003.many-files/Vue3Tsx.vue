<script lang="tsx">
import { defineComponent } from 'vue'
import { Message } from '@arco-design/web-vue'

export default defineComponent({
  name: 'TestTsSetup',
  setup(props, { slots, emit, attrs, expose }) {
    console.log('props, { slots, emit, attrs }: ', props, { slots, emit, attrs, expose })
    // return () => {
    //   return <div>god aa</div>
    // }
    function say() {
      Message.info({
        content: () => {
          return <div>say</div>
        },
      })
    }
    return { aa: 'aa', say }
  },
})
</script>
<template>
  <div>
    <div>11 {{ aa }}</div>
    <div>
      <button @click="say">cc2</button>
    </div>
  </div>
</template>
