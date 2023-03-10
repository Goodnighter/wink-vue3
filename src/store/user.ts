import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: ()=>{
    return {
      name: 'wink'
    }
  },

  actions: {
    updated (name: string) {
      this.name = name
    }
  }
})