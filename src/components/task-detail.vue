<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>{{task.task}}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-avatar>
      <v-icon
        @click="$router.push({path:'/projects/'+$route.params.projectId+'/tasks/'+task._id})"
      >mdi-details</v-icon>
    </v-list-item-avatar>
    <v-list-item-avatar>
      <v-icon @click="$emit('deleteTask',task._id)">mdi-delete</v-icon>
    </v-list-item-avatar>
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