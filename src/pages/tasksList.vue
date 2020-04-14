<template>
  <v-list rounded dark v-if="tasks.length>0">
    <task-detail
      v-for="task in tasks"
      :key="task._id"
      v-bind:task="task"
      v-on:deleteTask="deleteTask"
    ></task-detail>
  </v-list>
  <v-list v-else dark>No Tasks Selected</v-list>
</template>
<script>
import { getRequest, deleteRequest } from "@/services/requests";
import TaskDetail from "@/components/task-detail";
export default {
  name: "tasks-list",
  components: {
    TaskDetail
  },
  data: () => ({
    tasks: []
  }),
  created() {
    if (this.$route.params.projectId) {
      this.getTasks();
    }
  },
  methods: {
    async getTasks() {
      this.tasks = await getRequest(
        `/projects/${this.$route.params.projectId}/tasks`
      );
    },
    deleteTask(taskId) {
      deleteRequest(
        `/projects/${this.$route.params.projectId}/tasks/${taskId}`,
        {}
      ).then(() => {
        this.$store.commit("snackbar/snackbar", {
          message: "Task Deleted !",
          type: "success"
        });
        this.getTasks();
      });
    }
  },
  watch: {
    "$route.params.projectId": function() {
      this.getTasks();
    }
  }
};
</script>