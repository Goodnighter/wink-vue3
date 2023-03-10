<script setup lang="ts">
import { ref } from 'vue'
import { userStore } from '@/store/user';
defineProps<{ msg: string }>()

const  user = userStore()
const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
  <div>
    {{ user.name }}
  </div>
</template>

<style scoped>
*{
  color: white
}
.read-the-docs {
  color: #888;
}
</style>