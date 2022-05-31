import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '../views/NotFoundView.vue'
import GetStarted from '../views/GetStarted/GetStartedView.vue'
import ModuleView from '../views/GetStarted/ModuleView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/GetStarted/',
    name: 'GetStarted',
    component: GetStarted
    // component: () => import ("@/views/GetStarted/GetStartedView.vue")
  },
  {
    path: '/GetStarted/:link',
    name: 'ModuleView',
    component: ModuleView,    
    props: true
  },
  // 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFoundView',
    component: NotFoundView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
