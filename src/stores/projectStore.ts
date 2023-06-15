import { ref } from 'vue'
import { defineStore } from 'pinia'

interface projectType {
  id: string
  name: string
}

const projectsInitial: projectType[] = [
  {
    id: crypto.randomUUID(),
    name: ''
  }
]

export const useProjectStore = defineStore('projects', () => {
  const projects = ref<projectType[]>(projectsInitial)

  const newProject = ref<projectType>({ id: crypto.randomUUID(), name: '' })

  function addProject(project: projectType) {
    projects.value.push(project)
  }

  function removeProject(id: string) {
    return projects.value.filter((t) => t.id !== id)
  }

  return { projects, addProject, removeProject, newProject }
})
