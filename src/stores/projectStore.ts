import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface todoType {
  id: string
  name: string
}

export interface projectType {
  id: string
  name: string
  todos: todoType[]
}

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<projectType[]>([] as projectType[])

  const newTodo = ref<todoType>({} as todoType)

  function addProject(project: projectType) {
    projects.value.push({ ...project, todos: [], id: crypto.randomUUID() })
  }

  function removeProject(id: string) {
    return projects.value.filter((t) => t.id !== id)
  }

  function addTodo(id: string, todo: todoType) {
    const currentProject = projects.value.find((pr) => pr.id === id)
    currentProject?.todos.push({ ...todo })
  }

  return { projects, addProject, removeProject, newTodo, addTodo }
})
