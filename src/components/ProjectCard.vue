<script setup lang="ts">
import ProjectTodos from './ProjectTodos.vue'
import type { todoType } from '../stores/projectStore'

type projectCardProps = {
  projectData: { id: string; name: string; todos: todoType[] }
}

const props = defineProps<projectCardProps>()
</script>

<template>
  <div class="project py-5 px-10 bg-emerald-500 rounded-md">
    <h2 class="project__heading text-emerald-800 font-semibold">
      {{ props.projectData.name }}
    </h2>
    <div class="todos">
      <h3 class="todos__heading mb-2 mt-4 text-emerald-200">Todos</h3>
      <ul class="todos__list">
        <ProjectTodos v-for="todo in props.projectData.todos" :key="todo.id" :todoData="todo" />
      </ul>
    </div>
    <input type="text" placeholder="Add new todo..." />
  </div>
</template>
