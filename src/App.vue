<template>
  <component :is="layoutComponent">
    <router-view></router-view>
  </component>
</template>

<script>
import MainLayout from "@/components/mainLayout";
import AuthLayout from "@/components/authLayout";
export default {
  name: "App",
  components: {
    MainLayout,
    AuthLayout
  },
  computed: {
    layoutComponent() {
      return this.$route.meta.layout || "main-layout";
    }
  }
};
</script>
