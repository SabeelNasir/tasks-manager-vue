<template>
  <v-app>
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title @click="$router.push({path:'/'})" style="cursor:pointer">Tasks Manager</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <slot></slot>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "auth-layout",
  data: () => ({})
};
</script>

<style scoped>
</style>