import { createRouter, createWebHistory } from 'vue-router'

const routes = [{{ routes }}]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition : { top: 0, left: 0 }
})

router.beforeEach(to => {
  document.title = to.name
})

export default router
