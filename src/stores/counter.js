import { defineStore } from 'pinia'

// 類似setup()
import { ref, computed } from 'vue'
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

// 類似Vuex
export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  // 也可以這樣定義
  // state: () => ({ count: 0 })
  },
  actions: {
    increment(text) {
      this.count++
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  }
})

