<script setup lang="tsx">
defineOptions({
  inheritAttrs: false,
})

const vNodesOne = (
  <div>
    <div>vnode one</div>
  </div>
)

const vNodesFragment = (
  <>
    <div>vnode fragment 1</div>
    <div>vnode fragment 2</div>
  </>
)

const vNodesList = [
  <div>vnode list 1</div>, //
  <div>vnode list 2</div>,
]

const someValue = 'god'
</script>
<template>
  <div>
    <div>someValue {{ someValue }}</div>
    <div>
      <div>someVNodes1</div>

      <!-- 不要用这种, vNodesList 不行 -->
      <!-- <component :is="vNodesOne" />
      <component :is="vNodesFragment" />
      <component :is="vNodesList" /> -->

      <!-- renderFn 可以兼容 vNodesList, 形式统一, 减少记忆负担 -->
      <component :is="() => vNodesOne" />
      <component :is="() => vNodesFragment" />
      <component :is="() => vNodesList" />
    </div>
  </div>
</template>
