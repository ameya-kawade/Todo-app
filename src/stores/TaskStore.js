import { defineStore } from 'pinia'
import { useToast } from 'primevue/usetoast'

export const useTaskStore = defineStore('task', {
  state: () => ({
    id: 0,
    newTask: '',
    tasks: [],
    toast: useToast(),
  }),
  actions: {
    addTask() {
      if (this.newTask.trim() != '') {
        this.tasks.push({ id: this.id++, text: this.newTask, done: false })

        this.newTask = ''

        localStorage.setItem('tasks', JSON.stringify(this.tasks))

        this.toast.add({
          severity: 'success',
          summary: 'Added',
          detail: 'Task added successfully',
          life: 3000,
          group: 'br',
        })
      }
    },
    deleteTaskFromTasks(task) {
      this.tasks = this.tasks.filter((t) => t.id !== task.id)

      localStorage.setItem('tasks', JSON.stringify(this.tasks))

      this.toast.add({
        severity: 'success',
        summary: 'Deleted',
        detail: 'Task deleted successfully',
        life: 3000,
        group: 'br',
      })
    },
  },
})
