<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { elContains } from '../util/elContains'

const btn1 = ref()
const btn2 = ref()
CustomEvent
MouseEvent
PointerEvent
function div1Click(evt) {
  console.log('div1Click: ', evt, evt.target, evt.currentTarget, evt.type, evt.eventPhase)
}
function div12Click(evt) {
  console.log('div12Click: ', evt, evt.target, evt.currentTarget, evt.type, evt.eventPhase)
  // evt.stopImmediatePropagation()
}
function div2Click(evt) {
  console.log('div2Click: ', evt, evt.target, evt.currentTarget, evt.type, evt.eventPhase)
}
function div3Click(evt) {
  console.log('div3Click: ', evt, evt.target, evt.currentTarget, evt.type, evt.eventPhase)
}
function btn1Click(evt) {
  console.log('btn1Click: ', evt, evt.target, evt.currentTarget, evt.type, evt.eventPhase)
}
function btn2Click(evt: MouseEvent) {
  console.log('btn2Click: ', evt, evt.target, evt.currentTarget, evt.type, evt.eventPhase)
  console.log(333, evt instanceof MouseEvent)

  if (evt.isTrusted) {
    const evt3 = new MouseEvent(evt.type, evt)
    evt3.test1 = 123
    btn1.value.dispatchEvent(evt3)
  }

  // const evt3 = new MouseEvent(evt.type, evt)
  // console.log('evt3: ', evt3)

  // console.log(JSON.stringify(JSON.parse(JSON.stringify(evt3))))

  // console.log(this.$refs.btn1)
  // console.log(this.$refs.btn2)

  // btn1.value.dispatchEvent(evt2)
}

onMounted(() => {
  document.addEventListener('click', (evt) => {
    console.log('document Click: ', evt, evt.target, evt.currentTarget, evt.type, evt.eventPhase)
    if (evt.isTrusted) {
      const evt3 = new MouseEvent(evt.type, evt)
      evt3.test1 = 123
      btn1.value.dispatchEvent(evt3)
    } else {
      console.log(999, evt)
    }
  })
})
</script>
<template>
  <div style="padding: 20px; background: pink" @click="div1Click" @click.capture="div12Click">
    <div style="padding: 50px; background: purple" @click="div2Click">
      <div style="padding: 30px; background: cyan" @click="div3Click">
        <button ref="btn1" @click="btn1Click">btn1</button>
      </div>
    </div>
  </div>
  <div style="padding: 20px; background: lightblue; margin-top: 20px">
    <button ref="btn2" @click="btn2Click">btn2</button>
  </div>
</template>
<style scoped></style>
