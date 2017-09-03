import Vue from 'vue'
import Router from 'vue-router'
import Preview from '@/components/ComponentsPreview'
import Index from '@/pages/index'


Vue.use(Router)

export default new Router({
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
    }
  ]
})
