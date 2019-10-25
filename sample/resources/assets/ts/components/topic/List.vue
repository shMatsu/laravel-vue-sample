<template>
    <div class="container">
        <div>listComponent show</div>
        <div class="list-group">
<!--            <router-link v-for="( item, key, index ) in items" :key="key" :to="{ name: 'detail', params: { id: item.id } }" class="list-group-item">-->
                <router-link v-for="( item, key, index ) in items" :key="key" to="test" class="list-group-item">
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

        mounted() {
            this.getTopics();
        }

        getTopics() {
            window.axios
                .get("/api/topics")
                .then(response => {
                    // console.log({response});
                    this.items = response.data.data;
                })
                .catch(err => console.error(err));
        }

        onDelete(id: number, key: number) {
            window.axios.delete('/api/topics/' + id)
                .then(() => {
                    this.$delete(this.items, key);
                })
        }
    }
</script>
