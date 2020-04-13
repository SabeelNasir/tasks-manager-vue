<template>
  <v-row>
    <v-col cols="3" sm="3">
      <projects-list />
    </v-col>
    <v-col cols="9" sm="9">
      <tasks-list />
    </v-col>
  </v-row>
</template>

<script>
import ProjectsList from "@/pages/projectsList";
import TasksList from "@/pages/tasksList";
export default {
  name: "home",
  components: {
    ProjectsList,
    TasksList
  }
};
</script>

<style scoped>
</style>