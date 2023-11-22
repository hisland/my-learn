<script setup lang="ts">
import { reactive, ref, computed } from 'vue'

function showTooltip(el, event, binding) {
  const tooltipElement = document.createElement('div')
  tooltipElement.classList.add('MouseMoveTooltip')
  const maxWidth = `${binding.value?.maxWidth ?? 300}px`
  const content = binding.value?.content ?? el.textContent
  tooltipElement.textContent = content
  tooltipElement.style.maxWidth = maxWidth
  document.body.appendChild(tooltipElement)
  const moveTooltip1 = (event) => {
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

function moveTooltip(el, event) {
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

const vMouseMoveTooltip = {
  // created(el, binding, vnode, prevVnode) {
  //   console.log('aa created: ', el, binding, vnode, prevVnode)
  // },
  // beforeMount(el, binding, vnode, prevVnode) {
  //   console.log('aa beforeMount: ', el, binding, vnode, prevVnode)
  // },
  mounted(el, binding, vnode, prevVnode) {
    el.addEventListener('mouseenter', (event) => {
      console.log('event.target === el: ', event.target === el)
      console.log('binding: ', binding)
      showTooltip(el, event, binding)
    })
  },
  // beforeUpdate(el, binding, vnode, prevVnode) {
  //   console.log('aa beforeUpdate: ', el, binding, vnode, prevVnode)
  // },
  // updated(el, binding, vnode, prevVnode) {
  //   console.log('aa updated: ', el, binding, vnode, prevVnode)
  // },
  beforeUnmount(el, binding, vnode, prevVnode) {
    console.log('aa beforeUnmount: ', el, binding, vnode, prevVnode)
  },
  // unmounted(el, binding, vnode, prevVnode) {
  //   console.log('aa unmounted: ', el, binding, vnode, prevVnode)
  // },
}

const isVisible = ref(true)
function toggleVisible() {
  isVisible.value = !isVisible.value
}

const aa = ref('123')
function rnd() {
  aa.value = Math.random().toString(36).substring(2)
}
</script>
<template>
  <div class="AppEntry">
    <div class="tooltip">这是 tooltip</div>
    <button @click="toggleVisible">toggleVisible</button>
    <button @click="rnd">rnd</button>
    <div
      class="wrap"
      style="border: 1px solid #eee; padding: 10px; position: relative"
    >
      <div
        v-MouseMoveTooltip
        v-if="isVisible"
        style="border: 1px solid green; width: 100px"
        class="box"
      >
        新增多模态 API，包括带视觉功能的 GPT-4 Turbo、图像创建
        （多模态）和新的声音合成模
      </div>
      <div
        v-MouseMoveTooltip="{ maxWidth: 500 }"
        v-if="isVisible"
        style="
          position: absolute;
          top: 50px;
          left: 90px;
          border: 1px solid green;
          width: 350px;
        "
        class="box"
      >
        听到这一系列“王炸”更新，也难怪网友会迫不及待地前往 ChatGPT
        进行尝鲜。因此这场大会结束的第二天，ChatGPT 和 API
        就出现了“周期性中断”，OpenAI 共耗时 3
        个多小时解决这个问题，但当时并没有明确说明其中断原因
      </div>
      <div
        v-MouseMoveTooltip="{ maxWidth: 300 }"
        v-if="isVisible"
        style="position: absolute; top: 100px; left: 130px; width: 150px"
        class="box"
      >
        高效快速地提供信息和服务一直是谷歌业务的核心，也是 Chrome
        团队的工作动力。长期以来，他们注意到，即使网站在一段时间之内改善了性能，但随着时间的推移，性能会随之下降，即使
        Chrome 搜索速度再快，当页面加载缓慢时，用户体验也会受到影响
      </div>
      <div
        v-MouseMoveTooltip="{ maxWidth: 300, content: 'test content' }"
        v-if="isVisible"
        style="position: absolute; top: 150px; left: 130px; width: 150px"
        class="box"
      >
        高效快速地提供信息和服务一直是谷歌业务的核心，也是 Chrome
        团队的工作动力。长期以来，他们注意到，即使网站在一段时间之内改善了性能，但随着时间的推移，性能会随之下降，即使
        Chrome 搜索速度再快，当页面加载缓慢时，用户体验也会受到影响
      </div>
    </div>
  </div>
</template>
<style>
.AppEntry {
}
.MouseMoveTooltip {
  position: fixed;
  padding: 3px;
  background: #f2f3f5;
  color: rgb(29, 33, 41);
  font-size: 12px;
}
.box {
  border: 1px solid green;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
