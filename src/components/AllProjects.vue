<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectStore } from '../stores/projectStore'
import ProjectCard from './ProjectCard.vue'

const projectsStore = useProjectStore()
const { projects } = storeToRefs(projectsStore)
</script>

<template>
  <div class="projects grid grid-cols-5 gap-3 mt-6 px-5">
    <ProjectCard v-for="project in projects" :key="project.id" :projectData="project" />
  </div>
</template>
