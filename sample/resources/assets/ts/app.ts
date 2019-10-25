import Vue from 'vue';
import bootstrap from './bootstrap';
import SampleComponent from './components/Sample.vue';
import ListComponent from './components/topic/List.vue';
import CreateComponent from './components/topic/Form.vue';
import NavbarComponent from './components/Navbar.vue';

bootstrap();

import VueRouter, { RouteConfig } from 'vue-router'; // Vue Routerの読み込み
Vue.use(VueRouter); // Vue.jsで、Vue Routerを使うように設定

// vue-routerによるルーティング設定
const routes: RouteConfig[] = [
  { path: '/', component: SampleComponent, name: 'sample' },
  { path: '/topic/list', component: ListComponent, name: 'topicList' },
  { path: '/topic/create', component: CreateComponent, name: 'create' },
  // { path: '/:id', component: require('./components/Detail.vue'), name: 'detail' }, // id番号でアクセスしたらDetail.vueを表示
];
const router = new VueRouter({
  mode: 'history',
  routes: routes
});

// Vueのコンポーネント
Vue.component('navbar', NavbarComponent); //ページ上部にメニューバーを表示させたいので、Navbar.vueを登録

const app = new Vue({
  router,
  // render: h => h(AppComponent)
}).$mount('#app');
