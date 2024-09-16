import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/i-ui' },
  {
    path: '/i-ui',
    name: 'iUi',
    component: () => import('@/views/Home.vue'),
    meta: { title: 'i-ui' }
  },
  {
    path: '/i-ui/i-button',
    name: 'iButton',
    component: () => import('packages/i-button/docs/README.md'),
    meta: { title: 'i-button' }
  },
  {
    path: '/i-ui/i-icon',
    name: 'iIcon',
    component: () => import('packages/i-icon/docs/README.md'),
    meta: { title: 'i-icon' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(to => {
  document.title = to.meta.title || 'iui'
})

export default router
