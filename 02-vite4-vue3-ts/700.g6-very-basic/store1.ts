import { defineStore } from 'pinia'
import { ref, reactive, computed, readonly } from 'vue'

export const useStore1 = defineStore('store1', () => {
  const ref1 = ref('33')
  const reactive1 = reactive({
    aa: '1',
    bb: '2',
  })
  return {
    ref1: readonly(ref1),
    reactive1: readonly(reactive1),
  }
})
