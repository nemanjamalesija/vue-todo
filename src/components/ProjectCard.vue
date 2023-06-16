<script setup lang="ts">
import ProjectTodos from './ProjectTodos.vue'
import type { todoType } from '../stores/projectStore'
import { useProjectStore } from '../stores/projectStore'
import { ref } from 'vue'

const projectsStore = useProjectStore()

type projectCardProps = {
  projectData: { id: string; name: string; todos: todoType[] }
}

const todoLocal = ref({} as todoType)

const addTodoAndClearInput = () => {
  projectsStore.addTodo(props.projectData.id, todoLocal.value)
  todoLocal.value = {} as todoType
}

const props = defineProps<projectCardProps>()
</script>

<template>
  <div class="project py-5 px-10 bg-emerald-500 rounded-md">
    <h2
      class="project__heading font-semibold text-emerald-200 italic uppercase border-b-2 border-emerald-200"
    >
      {{ props.projectData.name }}
    </h2>
    <div class="todos">
      <h3 class="todos__heading mb-2 mt-4 text-emerald-800 font-semibold uppercase">
        Todos &darr;
      </h3>
      <ul class="todos__list">
        <ProjectTodos v-for="todo in props.projectData.todos" :key="todo.id" :todoData="todo" />
      </ul>
    </div>
    <input
      type="text"
      placeholder="Add new todo..."
      v-model="todoLocal.name"
      class="px-1 py-2 rounded-md mt-3"
    />
    <div class="">
      <button
        class="uppercase font-bold text-emerald-800 bg-emerald-200 py-2 px-4 inline-block rounded-md mt-2"
        @click="addTodoAndClearInput"
      >
        Add
      </button>
    </div>
  </div>
</template>
