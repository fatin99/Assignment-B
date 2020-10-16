import Vue from 'vue';
import Router from 'vue-router';
import Modules from './views/Modules.vue';
import Create from './views/Create.vue';
import Read from './views/Read.vue';
import Update from './views/Update.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/module'
    },
    {
      path: '/module',
      name: 'modules',
      component: Modules
    },
    {
      path: '/module/new',
      name: 'new-module',
      component: Create
    },
    {
      path: '/module/:id',
      name: 'show',
      component: Read
    },
    {
      path: '/module/:id/edit',
      name: 'edit',
      component: Update
    },
  ]
});
