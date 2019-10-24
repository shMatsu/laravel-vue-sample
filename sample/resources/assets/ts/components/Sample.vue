<template>
  <div class="App">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1>{{ message }}</h1>
          <p class="text-center">
            <button class="btn btn-primary" @click="load">Load Users</button>
          </p>
          <users :users="users"></users>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import UsersComponent from "./Users.vue";
import User from "../models/User";

@Component({
  components: {
    users: UsersComponent
  }
})
export default class Sample extends Vue {
  message = "Laravel + Vue.js + TypeScript";
  users: User[] = [];

  load() {
    // 下記サイトからダミーデータ取得
    // https://jsonplaceholder.typicode.com/
    window.axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        this.users = response.data;
      })
      .catch(err => console.error(err));
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin: 4rem 0;
}
</style>