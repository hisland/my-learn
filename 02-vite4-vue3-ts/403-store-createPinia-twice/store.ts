import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { readonly } from 'vue'

export const useAlertsStore = defineStore('alerts', () => {
  const ref1 = ref('33')
  const reactive1 = reactive({
    aa: '1',
    bb: '2',
  })
  const obj = {
    ref1: readonly(ref1),
    reactive1: readonly(reactive1),

    set_ref1() {
      ref1.value = Math.random().toString(32)
    },
    set_reactive1() {
      reactive1.aa = Math.random().toString(32)
      reactive1.bb = Math.random().toString(32)
    },
  }

  return obj
  // return readonly(obj)
})
