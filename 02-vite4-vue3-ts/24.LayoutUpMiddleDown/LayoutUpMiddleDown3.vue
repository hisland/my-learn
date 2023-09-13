<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fullType?: 'absFull' | 'flexFull' | 'sizeFull'
  }>(),
  {
    fullType: 'sizeFull',
  }
)
</script>
<template>
  <div class="layoutUpDownWrap" :class="props.fullType">
    <div class="layoutUpDownAuto" v-if="$slots.up">
      <slot name="up"></slot>
    </div>
    <div class="layoutUpDownRest">
      <div class="absFull">
        <slot></slot>
      </div>
    </div>
    <div class="layoutUpDownAuto" v-if="$slots.down">
      <slot name="down"></slot>
    </div>
  </div>
</template>
<style scoped lang="less">
.layoutUpDownWrap {
  display: flex;
  flex-direction: column;
  > .layoutUpDownAuto {
    flex: 0 0 auto;
  }
  > .layoutUpDownRest {
    flex: 1 1 auto;
    position: relative;
  }
}
.absFull {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.flexFull {
  flex: 1 1 auto;
}
.sizeFull {
  width: 100%;
  height: 100%;
}
</style>
