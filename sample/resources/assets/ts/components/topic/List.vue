<template>
  <div class="container">
      <div>listComponent show</div>
    <div class="list-group">
      <router-link v-for="( item, key, index ) in items" :key="key" :to="{ name: 'detail', params: { id: item.id } }" class="list-group-item">
        {{item.title}}
        <button class="btn" @click.stop.prevent="onDelete(item.id, key)">削除</button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class List extends Vue {
  items: any[] = [];

  load() {
    window.axios
      .get("/api/topics")
      .then(response => {
        this.items = response.data.data;
      })
      .catch(err => console.error(err));
  }
}
</script>