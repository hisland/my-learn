<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { onMounted } from 'vue'
import { useEventListener } from '@vueuse/core'

const props = withDefaults(
  defineProps<{
    text: string
    maxWidth?: number
  }>(),
  {
    maxWidth: 300,
  }
)

function showTooltip(el: HTMLDivElement, event: MouseEvent) {
  const tooltipElement = document.createElement('div')
  tooltipElement.style.position = 'fixed'
  tooltipElement.style.padding = '3px'
  tooltipElement.style.background = '#f2f3f5'
  tooltipElement.style.color = 'rgb(29, 33, 41)'
  tooltipElement.style.fontSize = '12px'
  const maxWidth = `${props.maxWidth}px`
  const content = props.text
  tooltipElement.textContent = content
  tooltipElement.style.maxWidth = maxWidth
  document.body.appendChild(tooltipElement)
  moveTooltip(tooltipElement, event)
  const moveTooltip1 = (event: MouseEvent) => {
    moveTooltip(tooltipElement, event)
  }

  function hideTooltip() {
    el.removeEventListener('mouseleave', hideTooltip)
    el.removeEventListener('mousemove', moveTooltip1)
    document.body.removeChild(tooltipElement)
  }
  el.addEventListener('mouseleave', hideTooltip)
  el.addEventListener('mousemove', moveTooltip1)
}

function moveTooltip(el: HTMLDivElement, event: MouseEvent) {
  const tooltipWidth = el.offsetWidth
  const tooltipHeight = el.offsetHeight
  let left = event.clientX + 10
  let top = event.clientY + 10
  const maxWidth = window.innerWidth - 10
  if (tooltipWidth > maxWidth) {
    el.style.width = `${maxWidth - 10}px`
    left = 10
  } else if (left + tooltipWidth > maxWidth) {
    left = maxWidth - tooltipWidth
  }
  const maxHeight = window.innerHeight - 10
  if (tooltipHeight > maxHeight) {
    el.style.height = `${maxHeight - 10}px`
    top = 10
  } else if (top + tooltipHeight > maxHeight) {
    top = maxHeight - tooltipHeight
  }
  el.style.left = `${left}px`
  el.style.top = `${top}px`
}

const ref1 = ref<HTMLDivElement | null>(null)

useEventListener(ref1, 'mouseenter', (evt) => {
  if (ref1.value) {
    const range1 = document.createRange()
    range1.setStart(ref1.value, 0)
    range1.setEnd(ref1.value, ref1.value.childNodes.length)
    if (range1.getBoundingClientRect().width > ref1.value.offsetWidth) {
      showTooltip(ref1.value, evt)
    }
  }
})
</script>
<template>
  <div class="OneLineTextAutoTooltip" ref="ref1">
    {{ text }}
  </div>
</template>
<style>
.OneLineTextAutoTooltip {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
