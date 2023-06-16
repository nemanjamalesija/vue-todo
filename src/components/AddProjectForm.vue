<script setup lang="ts">
import { useProjectStore } from '../stores/projectStore'

const projectsStore = useProjectStore()
</script>

<template>
  <div class="bg-emerald-500">
    <form class="py-5 px-10 flex justify-center items-center">
      <div class="form__control">
        <label class="mr-2 text-emerald-800 font-bold" for="name">Project name</label>
        <input class="rounded-md" type="text" v-model="projectsStore.newProject.name" />
      </div>
    </form>
    <div class="flex justify-center items-center">
      <button
        type="submit"
        class="btn btn__sibmit text-center py-3 px-5 bg-emerald-200 inline-block rounded-md font-bold text-emerald-800 mb-5"
        @click.prevent="projectsStore.addProject(projectsStore.newProject)"
      >
        Add new project
      </button>
    </div>
  </div>
</template>
