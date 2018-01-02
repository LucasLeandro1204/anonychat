import Vue from 'vue';
import App from './App.vue';
import VueStash from 'vue-stash';

Vue.use(VueStash);

window.app = new Vue(App).$mount('#app');
