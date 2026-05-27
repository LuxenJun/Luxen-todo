<script setup>
import Header from './components/header.vue'
import Item from './components/item.vue'
import { useTodoStore } from './stores/todo.js'
</script>

<template>
  <div>
    <h1>Todo App</h1>
    <Header></Header>
    <Item></Item>
  </div>
</template>

<style scoped></style>
