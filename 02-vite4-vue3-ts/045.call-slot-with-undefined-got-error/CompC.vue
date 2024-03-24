<script setup lang="tsx">
function show(params: any) {
  console.log('params: ', params)
}

function toRender(params2: any) {
  console.log('params2: ', params2)
  return {
    render() {
      return params2
    },
  }
}
</script>
<template>
  <div style="border: 1px solid green; margin: 10px">
    <div>compc</div>
    <!-- <slot></slot> -->
    <!-- vNodes 不能这样, 要包装成 toRender 给 component -->
    <!-- {{ $slots.default({ test: 1 }) }} -->
    {{ show($slots.default()) }}
    <!-- {{ show($slots.default({ test: 1 })) }} -->
    <!-- <component :is="toRender($slots.default())"></component> -->
    <div>slotb</div>
    <slot name="slotb"></slot>
    <div>slotc</div>
    <slot name="slotc"></slot>
  </div>
</template>
