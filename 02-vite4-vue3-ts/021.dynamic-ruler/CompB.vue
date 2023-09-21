<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

const gapWidth = ref(100)
const offsetX = ref(0)
const scale = ref(0.5)
const rect = ref({})
const wrapRef = ref<HTMLElement | null>(null)

const scaleOffsetX = computed(() => offsetX.value * scale.value)
const realGapWidth = computed(() => gapWidth.value * scale.value)

const scaleFactor = computed(() => {
  if (scale.value <= 1) {
    return Math.floor(1 / scale.value)
  } else if (scale.value <= 2) {
    return 0.5
  } else if (scale.value <= 3) {
    return 0.25
  } else {
    return 0.2
  }
})

const offsetCount = computed(() => {
  return (
    Math.ceil(scaleOffsetX.value / (realGapWidth.value * scaleFactor.value)) + 1
  )
})
const widthCount = computed(() => {
  return (
    Math.ceil(rect.value.width / (realGapWidth.value * scaleFactor.value)) + 1
  )
})

type labelItem = {
  label: number
  style: {
    left: string
  }
}
const labelList = computed(() => {
  const list: labelItem[] = []
  let index = -offsetCount.value + 1
  const max = widthCount.value + index + 1
  for (; index < max; index++) {
    const label = gapWidth.value * index * scaleFactor.value
    const num2 = realGapWidth.value * index * scaleFactor.value
    list.push({
      label,
      style: {
        left: `${num2 + scaleOffsetX.value}px`,
      },
    })
  }
  return list
})
const dList = computed(() => {
  const list: string[] = []
  let index = 0
  const max = realGapWidth.value * scaleFactor.value
  for (; index < max; index += 5) {
    if (index === 0) {
      list.push(`M.5 0 L.5 18`)
    } else {
      list.push(`M${index + 0.5} 13 L${index + 0.5} 18`)
    }
  }
  return list.join(' ')
})
const styleBg = computed(() => {
  return {
    backgroundImage: `url("data:image/svg+xml,${encodeURI(
      `<svg viewBox='0 0 ${
        realGapWidth.value * scaleFactor.value
      } 18' xmlns='http://www.w3.org/2000/svg'><path d='${
        dList.value
      }' stroke='black' stroke-width='.5' /></svg>`,
    )}")`,
    backgroundPosition: `${scaleOffsetX.value}px 0`,
    backgroundImage1: `url( "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'%3E%3Cpath d='M10 10h123v123H10z'/%3E%3C/svg%3E" )`,
    backgroundImage2: `url("data:image/svg+xml,%3Csvg viewBox='0 0 50 18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='${dList.value}' stroke='black' stroke-width='.5' /%3E%3C/svg%3E")`,
  }
})
onMounted(() => {
  const rect1 = wrapRef.value!.getBoundingClientRect()
  rect.value = rect1
})
</script>
<template>
  <div class="wrap" ref="wrapRef">
    <div
      class="label"
      v-for="(vv0, index0) in labelList"
      :key="index0"
      :style="vv0.style"
    >
      {{ vv0.label }}
    </div>
    <div class="bg" :style="styleBg"></div>
    <div
      :style="{
        width: '100px',
        background: 'purple',
        transform: `scaleX(${scale})`,
        transformOrigin: `0 center`,
      }"
    >
      width: 100px;
    </div>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <path :d="dList" stroke="black" stroke-width=".5" />
    </svg>
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="rulerPattern"
          :width="realGapWidth * scaleFactor"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <path :d="dList" stroke="black" stroke-width=".5" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#rulerPattern)" />
    </svg>

    <div>
      offsetX<input
        type="range"
        style="width: 500px"
        min="-1000"
        max="1000"
        step="1"
        v-model.number="offsetX"
      />
      {{ offsetX }}
    </div>
    <div>
      scale<input
        type="range"
        style="width: 500px"
        min=".1"
        max="3"
        step=".1"
        v-model.number="scale"
      />
      {{ scale }}
    </div>
    <div>scaleFactor {{ scaleFactor }}</div>
    <div>realGapWidth {{ realGapWidth }}</div>
  </div>
</template>
<style scoped lang="less">
.wrap {
  height: 18px;
  width: 800px;
  background: pink;
  position: relative;
}
.label {
  position: absolute;
  top: 0;
  left: 0;
  font: 10px/1 Arial, sans-serif;
  color: #333;
  cursor: default;
  pointer-events: none;
}
.bg {
  width: 100%;
  height: 100%;
  background-repeat: repeat-x;
  pointer-events: none;
}
</style>
