import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/pages/index';
import Result from '@/pages/result';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
    },
  ],
});
