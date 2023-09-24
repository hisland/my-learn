import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'

export const useAlertsStore = defineStore('alerts', () => {
  const ref1 = ref('33')
  const reactive1 = reactive({
    aa: '1',
    bb: '2',
  })
  return {
    ref1,
    reactive1,
  }
})
