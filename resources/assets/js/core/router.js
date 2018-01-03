import Vue from 'vue';
import VueRouter from 'vue-router';

import EmptyState from 'chat/EmptyState.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/', components: {
        default: EmptyState,
      },
    },
  ],
});
