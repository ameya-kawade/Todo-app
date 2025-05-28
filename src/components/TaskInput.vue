<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useTaskStore } from '@/stores/TaskStore.js'

const taskStore = useTaskStore()
</script>

<template>
  <form
    @submit.prevent="taskStore.addTask"
    class="flex-col gap-3 h-fit w-full justify-center items-baseline mb-4"
  >
    <InputText
      type="text"
      size="small"
      fluid=""
      v-model="taskStore.newTask"
      class="mb-3 grow text-sm"
      name="task"
      id="task"
      variant="filled"
      placeholder="Enter task"
    />
    <Button type="submit" fluid="" label="Add task" size="small" class="pt-2 btn grow" />
  </form>
</template>
