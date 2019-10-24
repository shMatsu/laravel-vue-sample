<template>
  <div class="Users">
    <div class="list-group">
      <div class="list-group-item" v-for="user in users">
        <h4>{{ user.name }} <small>@{{ user.username }}</small></h4>
        <p>{{ user.email }}</p>
        <p>{{ user.phone }}</p>
        <address>
          {{ user.address.street }}
          {{ user.address.suite }}
          {{ user.address.city }}
          {{ user.address.zipcode }}
        </address>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import User from '../models/User';

  @Component
  export default class Users extends Vue {
    @Prop() users: User[];
  }
</script>

<style lang="scss" scoped>
  .list-group-item {
    padding: 2rem;
    h4 {
      margin-top: 0;
    }
    address {
      margin-bottom: 0;
    }
  }
</style>