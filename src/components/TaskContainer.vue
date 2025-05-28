<script setup>
import Task from './Task.vue'
import ScrollPanel from 'primevue/scrollpanel'

const emits = defineEmits(['deleteTask'])

const props = defineProps({
  tasks: Array,
})
</script>

<template>
  <ScrollPanel class="w-full h-[53vh]">
    <Task
      v-for="task in props.tasks"
      :task="task"
      @delete="(t) => emits('deleteTask', t)"
      :key="task.id"
    />
  </ScrollPanel>
</template>
