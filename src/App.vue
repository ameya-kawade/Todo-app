<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import TaskContainer from './components/TaskContainer.vue'
import Toast from 'primevue/toast'
import Button from 'primevue/button'
import TaskInput from './components/TaskInput.vue'
import { useTaskStore } from '@/stores/TaskStore.js'

const taskStore = useTaskStore()

onMounted(() => {
  const localStorageTasks = JSON.parse(localStorage.getItem('tasks'))

  if (localStorageTasks != null) {
    taskStore.tasks = localStorageTasks
  }
})

const showCompleted = ref(false)

const filteredTask = computed(() => {
  return showCompleted.value ? taskStore.tasks.filter((t) => t.done === true) : taskStore.tasks
})

watch(
  () => taskStore.tasks,
  (newValue) => {
    localStorage.setItem('tasks', JSON.stringify(newValue))
  },
  {
    deep: true,
  },
)
</script>

<template>
  <h1 class="text-4xl block text-center">Todo list</h1>

  <div
    class="flex flex-col max-md:w-[95%] h-[85%] w-[40%] justify-around items-center my-10 card-container p-5"
  >
    <TaskInput />

    <div class="w-full h-[60em]">
      <TaskContainer
        :tasks="filteredTask"
        @deleteTask="(task) => taskStore.deleteTaskFromTasks(task)"
      />

      <Button @click="showCompleted = !showCompleted" size="small" class="btn self-end my-5">
        {{ showCompleted ? 'show all' : 'show only completed' }}
      </Button>
    </div>
  </div>
  <Toast position="bottom-right" group="br" />
</template>
