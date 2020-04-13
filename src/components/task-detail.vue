<template>
  <v-list-item link :to="'/projects/'+$route.params.projectId+'/tasks/'+task._id">
    <v-list-item-content>
      <v-list-item-title>{{task.task}}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "task-detail",
  props: {
    task: {
      type: Object,
      required: true
    }
  }
};
</script>