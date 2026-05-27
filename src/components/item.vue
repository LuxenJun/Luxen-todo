<template>

  <!-- 名字，初始日期，完成日期，完成状态，删除按钮，完成按钮。 -->
  <div v-for="item in todolist" :key="item.id" class="item">
    <div class="eventName">{{ item.eventName }}</div>
    <!-- time -->
    <div class="time">
      <div class="createAt ">{{ item.createAt }}</div>
      <div class="completedAt ">{{ item.completedAt }}</div>
    </div>

    <div class="completedStatus">
      <!-- 完成状态 -->
      <i :class="['iconfont', item.completed ? 'icon-shijianwanchengshuai' : 'icon-daiwancheng']"
        :style="{ color: item.completed ? 'green' : 'red' }" class="completed"></i>
      <!-- 删除按钮 -->
      <i class="iconfont icon-shanchu delete" @click="store.deleteEvent(item.id)"></i>

      <button @click="handleComplete(item.id)" class="complete">完成</button>
    </div>

  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo.js'

const store = useTodoStore()
const { todolist } = storeToRefs(store)

const handleComplete = (id) => {
  store.completeEvent(id)
}
</script>

<style scoped>
.time {
  color: #757575;
  font-size: 12px;
}

.delete,
.complete {
  cursor: pointer;
  margin-left: 10px;
}

.eventName {
  flex: 1;
}

.item {
  border: 1px solid #757575;
  width: 400px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>