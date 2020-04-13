<template>
  <v-app>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="6" sm="6">
          <v-card elevation="5">
            <v-toolbar color="primary" dark>
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form v-on:submit.prevent="validate()">
                <v-text-field outlined label="Email" v-model="formData.email"></v-text-field>
                <v-text-field outlined label="Password" v-model="formData.password"></v-text-field>
                <v-row justify="center">
                  <v-btn
                    type="submit"
                    elevation="5"
                    rounded
                    align="center"
                    color="primary"
                    @click="validate()"
                  >
                    <v-icon>mdi-lock-open</v-icon>Login
                  </v-btn>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { postRequest } from "@/services/requests";
export default {
  name: "login",
  data() {
    return {
      formData: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    validate() {
      if (this.formData.email && this.formData.password) {
        this.onSubmit();
      }
    },
    onSubmit() {
      postRequest("/login", this.formData)
        .then(data => {
          this.$store.commit("auth/setUser", data);
          this.$router.push("home");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>