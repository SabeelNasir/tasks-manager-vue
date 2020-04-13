<template>
  <v-list dark>
    <v-list-item
      v-for="item in projects"
      :key="item.name"
      link
      :to="'/projects/'+item._id+'/tasks'"
    >
      <v-list-item-content>
        <v-list-item-title>{{item.name}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
import { getRequest } from "@/services/requests";

export default {
  name: "projects-list",
  data: () => ({
    projects: [
      { name: "Project 1", link: "/projects/1/tasks" },
      { name: "Project 2", link: "/projects/2/tasks" },
      { name: "Project 3", link: "/projects/3/tasks" }
    ]
  }),
  created() {
    this.getProjects();
    console.log(this.$store.state.user);
  },
  methods: {
    async getProjects() {
      try {
        this.projects = await getRequest("/projects");
      } catch (error) {
        console.log(error.response.status);
      }
    }
  }
};
</script>