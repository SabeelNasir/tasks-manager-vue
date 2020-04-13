import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/store'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
   mode: 'history',
   routes
})
router.beforeEach((to, from, next) => {
   if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!store.getters['auth/isLoggedIn']) {
         next({ name: 'login' })
      } else {
         next()
      }
   } else if (to.matched.some(record => record.meta.requiresVisitor)) {
      if (store.getters['auth/isLoggedIn']) {
         next({ name: 'home' })
      } else {
         next()
      }
   } else {
      next()
   }
})

export default router
