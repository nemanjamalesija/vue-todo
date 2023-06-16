<script setup lang="ts">
import type { todoType } from '@/stores/projectStore'

type todoProps = {
  todoData: todoType
}

const props = defineProps<todoProps>()
</script>
<template>
  <li class="td">
    <h4>{{ props.todoData.name }}</h4>
  </li>
</template>
