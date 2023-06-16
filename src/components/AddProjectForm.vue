<script setup lang="ts">
import { useProjectStore, type projectType } from '../stores/projectStore'
import { ref } from 'vue'

const projectsStore = useProjectStore()

const localProject = ref<projectType>({} as projectType)

function addProject() {
  projectsStore.addProject(localProject.value)

  localProject.value.name = ''
}
</script>

<template>
  <div class="bg-emerald-500">
    <form class="py-5 px-10 flex justify-center items-center">
      <div class="form__control">
        <label class="mr-2 text-emerald-800 font-bold" for="name">Project name</label>
        <input class="rounded-md px-1 py-2" type="text" v-model="localProject.name" />
      </div>
    </form>
    <div class="flex justify-center items-center">
      <button
        type="submit"
        class="btn btn__sibmit text-center py-3 px-5 bg-emerald-200 inline-block rounded-md font-bold text-emerald-800 mb-5"
        @click.prevent="addProject"
      >
        Add new project
      </button>
    </div>
  </div>
</template>
