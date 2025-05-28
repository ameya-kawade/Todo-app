<script setup>
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Message from 'primevue/message'
import { useTaskStore } from '@/stores/TaskStore.js'

const taskStore = useTaskStore()

const props = defineProps({
  task: Object,
})

const task = taskStore.tasks.find((t)=>t.id===props.task.id);

function deleteTask() {
  taskStore.deleteTaskFromTasks(props.task);
}
</script>

<template>
  <div class="flex justify-start flex-wrap items-center self-start w-full my-5 gap-2.5">
    <Checkbox
      size="small"
      v-model="task.done"
      type="checkbox"
      name="comp"
      id="comp"
      binary
    />

    <Message
      severity="secondary"
      :class="{ 'line-through': props.task.done, 'overflow-hidden': true, 'text-ellipsis': true }"
    >
      {{ props.task.text }}
    </Message>

    <Button
      @click="deleteTask"
      class="btn shrink-0"
      icon="pi pi-times"
      severity="danger"
      aria-label="Cancel"
      size="small"
    />
  </div>
</template>
