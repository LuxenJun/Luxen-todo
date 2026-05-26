<template>
  <div>
    <input type="text" placeholder="请输入待办事项" v-model="Name">
    <button @click="addEvent">添加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const Name = ref('')

const addEvent = () => {
  if (Name.value.trim() === '') {
    return
  }

}
</script>

<style scoped></style>
