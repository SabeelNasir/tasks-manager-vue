<template>
  <v-form v-on:submit.prevent="onSubmit()">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field outlined label="Task" value="task.task" v-model="task.task"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-textarea
            outlined
            label="Description"
            value="task.description"
            v-model="task.description"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-btn color="primary" @click="onSubmit">{{task._id!=null ? 'Update' : 'Save'}}</v-btn>
        </v-col>
      </v-row>
      <v-snackbar v-model="snakbar">
        {{message}}
        <v-btn @click="snakbar = false" class="danger" text>Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-form>
</template>
<script>
import { patchRequest, getRequest } from "@/services/requests";
export default {
  name: "task-form",
  data: () => ({
    task: {
      task: "",
      description: "",
      project: null
    },
    snakbar: false,
    message: ""
  }),
  props: {
    taskId: {
      type: String,
      required: true
    }
  },
  created() {
    this.getTask();
  },
  methods: {
    getTask() {
      getRequest(
        `/projects/${this.$route.params.projectId}/tasks/${this.taskId}`
      )
        .then(data => {
          this.task = data;
        })
        .catch(error => console.log(error));
    },
    onSubmit() {
      patchRequest(
        `/projects/${this.$route.params.projectId}/tasks/${this.$route.params.taskId}`,
        this.task
      ).then(() => {
        this.message = "Task Updated Successfully !";
        this.snakbar = true;
        this.$emit("updated");
      });
    }
  }
};
</script>