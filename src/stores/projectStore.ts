import { ref } from 'vue'
import { defineStore } from 'pinia'

export interface todoType {
  id: string
  name: string
  dueDate: string
  completed: boolean
}

interface projectType {
  id: string
  name: string
  todos: todoType[]
}

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<projectType[]>([] as projectType[])

  const newProject = ref<projectType>({} as projectType)

  function addProject(project: projectType) {
    projects.value.push({ ...project, id: crypto.randomUUID() })
  }

  function removeProject(id: string) {
    return projects.value.filter((t) => t.id !== id)
  }

  return { projects, addProject, removeProject, newProject }
})
