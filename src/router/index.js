import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    reditect: '/404',
    component: () => import('@/views/404'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/Login'),
    meta: {
      isAuthNeed: false,
      title: 'Login | Blog ',
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/auth/Register'),
    meta: {
      isAuthNeed: false,
      title: 'Register | Blog ',
    },
  },
  {
    path: '/',
    name: 'index',
    components: {
      navbar: () => import('@/components/Navbar'),
      default: () => import('@/views/Index'),
    },
    meta: {
      isAuthNeed: true,
      title: 'Index | Blog ',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: '',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
    next()
  } else {
    next()
  }
})

export default router
