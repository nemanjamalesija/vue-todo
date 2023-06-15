import { ref } from 'vue'
import { defineStore } from 'pinia'

interface todoType {
  id: string
  name: string
  dueDate: string
  completed: boolean
}

const todosInitial: todoType[] = [
  {
    id: crypto.randomUUID(),
    name: '',
    dueDate: '',
    completed: false
  }
]

export const useTodoStore = defineStore('todos', () => {
  const todos = ref<todoType[]>(todosInitial)

  function addTodo(todo: todoType) {
    todos.value.push(todo)
  }

  function removeTodo(id: string) {
    return todos.value.filter((t) => t.id !== id)
  }

  return { todos, addTodo, removeTodo }
})
