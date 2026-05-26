import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const todolist = [
    {
      // id时间戳生成
      // eventName
      // createAt 建立时间
      // completedAt 完成时间
      // completed 是否完成
      
      id:+Date.now(),
      eventName: '学习 js',
      createAt: new Date().toLocaleString(),
      completedAt: null,
      completed: false
    }
  ]
 function addEvent (valName){
    if (valName.trim() === '') {
      return
    }
    todolist.value.push({
      id:+Date.now(),
      eventName: valName,
      createAt: new Date().toLocaleString(),
      completedAt: null,
      completed: false
    })
  }
  function deleteEvent (id){
    todolist.value = todolist.value.filter(item => item.id !== id)
  }
  function completeEvent (id){
    todolist.value.forEach(item => {
      if (item.id === id) {
        item.completed = !item.completed
      }
    })
  }

  return { todolist}
})
