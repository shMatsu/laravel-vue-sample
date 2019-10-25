<template>
    <div class="container">
        <div v-if="saved" class="alert alert-primary" role="alert">
            保存しました
        </div>
        <form>
            <div class="form-group">
                <label for="TopicTitle">タイトル</label>
                <input type="text" class="form-control" id="TopicTitle" v-model="title">
            </div>
            <div class="form-group">
                <label for="TopicContent">内容</label>
                <textarea class="form-control" id="TopicContent" rows="3" v-model="content"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="create">登録</button>
        </form>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from "vue-property-decorator";

    @Component
    export default class Form extends Vue {
        saved: boolean = false;
        title: string = '';
        content: string = '';

        create() {
            window.axios.post('/api/topics', {
                title: this.title,
                content: this.content,
            })
                .then((res) => {
                    this.title = '';
                    this.content = '';
                    this.saved = true;
                    console.log('created');
                });
        }
    }
</script>
