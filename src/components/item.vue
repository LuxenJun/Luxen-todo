<template>

  <!-- 名字，初始日期，完成日期，完成状态，删除按钮，完成按钮。 -->
  <div v-for="item in todolist" :key="item.id">
    <span>{{ item.eventName }}</span>
    <span>{{ item.createAt }}</span>
    <span>{{ item.completedAt }}</span>
    <span>
      <i :class="['iconfont', item.completed ? 'icon-shijianwanchengshuai' : 'icon-daiwancheng']"></i>
      <i class="iconfont icon-shanchu" @click="deleteEvent(item.id)"></i>
      <button>完成</button>
    </span>

  </div>
</template>

<script setup>

</script>

<style scoped></style>