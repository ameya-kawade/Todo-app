<script setup>
import Task from './Task.vue'
import ScrollPanel from 'primevue/scrollpanel'


const props = defineProps({
  tasks: Array,
})
</script>

<template>
  <ScrollPanel class="w-full h-[53vh]">
    <Task
      v-for="task in props.tasks"
      :task="task"
      :key="task.id"
    />
  </ScrollPanel>
</template>
