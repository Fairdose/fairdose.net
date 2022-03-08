import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/index.vue')
    },
    {
      path: '/stack',
      name: 'stack',
      component: () => import('@/views/stack/index.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/stack/index.vue')
    },
    {
      path: '/this-site',
      name: 'this-site',
      component: () => import('@/views/this_site/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('@/layouts/404.vue')
    }
  ]
})

export default router
