<template>
  <div>
    <input @keyup.enter="handleAdd" type="text" placeholder="请输入待办事项" v-model="Name">
    <button @click="handleAdd">添加</button>
    <div>
      <!-- <span>待办事项名：{{ todolist[0]?.eventName }}</span> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todo.js'

const Name = ref('')
const store = useTodoStore()
const todolist = store.todolist

const handleAdd = () => {
  store.addEvent(Name.value)
  Name.value = ''
}
</script>

<style scoped>
input {
  width: 340px;
  height: 40px;
  border: #4a4a4a 1px solid;
}

button {
  width: 60px;
  background-color: #4a4a4a;
  color: #fff;
  height: 40px;
  border: #4a4a4a 1px solid
}


input,
button {
  box-sizing: border-box;
  vertical-align: middle;
}
</style>
