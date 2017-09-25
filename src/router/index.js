import Vue from 'vue'
import Router from 'vue-router'
import Preview from '@/components/ComponentsPreview'
import Index from '@/pages/index'
import Result from '@/pages/result'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/preview',
      name: 'Preview',
      component: Preview
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
