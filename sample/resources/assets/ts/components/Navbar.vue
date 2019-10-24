<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item"><router-link class="nav-link active" to="/">サンプル</router-link></li>
            <li class="nav-item"><router-link class="nav-link active" to="/topic/list">一覧</router-link></li>
            <li class="nav-item"><router-link class="nav-link active" to="/topic/create">新規作成</router-link></li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
}
</script>