<template>
  <v-row no-gutters>
    <v-col cols="3" sm="3">
      <projects-list />
    </v-col>
    <v-col cols="9" sm="9">
      <task-form
        :taskId="$route.params.taskId"
        v-on:updated="()=>$router.push({path:`/projects/${this.$route.params.projectId}/tasks`})"
      ></task-form>
    </v-col>
  </v-row>
</template>
<script>
import ProjectsList from "@/pages/projectsList";
import TaskForm from "@/components/tasks/task-form";
export default {
  name: "task-detail",
  components: {
    ProjectsList,
    TaskForm
  },
  data: () => ({
    task: {}
  })
};
</script>