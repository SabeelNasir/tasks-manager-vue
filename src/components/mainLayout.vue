<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="item in sideBarItems" link :key="item.item" :to="item.link">
          <v-list-item-action>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="title">{{item.item}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title @click="$router.push({path:'/'})" style="cursor:pointer">Tasks Manager</v-toolbar-title>
      <v-spacer />
      <span>{{$store.getters['auth/getUser'].email}}</span>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon large v-on="on" @click="$store.commit('auth/logout')">
            <v-icon>mdi-exit-to-app Logout</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
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
  name: "main-layout",
  data: () => ({
    sideBarItems: [
      {
        item: "Tasks",
        link: "/tasks",
        icon: "mdi-book"
      },
      {
        item: "Projects",
        link: "/projects",
        icon: "mdi-home"
      }
    ],
    drawer: null
  })
};
</script>

<style scoped>
</style>