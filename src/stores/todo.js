import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



function getTime () {
  return new Date().toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}


export const useTodoStore = defineStore('todo', () => {
  const todolist = ref([
    {
      // id时间戳生成
      // eventName
      // createAt 建立时间
      // completedAt 完成时间
      // completed 是否完成
      
      id:+Date.now(),
      eventName: '学习 js',
      createAt: getTime(),
      completedAt: null,
      completed: false
    }
  ])
 function addEvent (valName){
    if (valName.trim() === '') {
      return
    }
    todolist.value.push({
      id:+Date.now(),
      eventName: valName,
      createAt: getTime(),
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
        item.completed = true;
        item.completedAt = getTime()
      }
    })
  }

  return { todolist, addEvent, deleteEvent, completeEvent }
})
