import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MainPage from '../pages/MainPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import ProjectDetailsPage from '@/pages/ProjectDetailsPage.vue'
import BlogDetailsPage from '@/pages/BlogDetailsPage.vue'

// https://v3.router.vuejs.org/ru/guide/essentials/navigation.html
const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/project/:pageNumber?', // : указывает, что параметр динамический, т.е. pageNumber может меняться, а знак ? означает, что он может отсутствовать (pageNumber может и не быть)
    name: 'project',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/ProjectsPage.vue')
  },
  {
    path: '/project/details/:projectNumber?',
    name: 'projectDetails',
    component: ProjectDetailsPage
  },
  {
    path: '/blog/:pageNumber?',
    name: 'blog',
    component: BlogPage
  },
  {
    path: '/blog/details/:articleNumber?',
    name: 'blogDetails',
    component: BlogDetailsPage
  },
  {
    path: '/:CatchAll(.*)',     // : означает, что путь динамический
    name: '404',
    component: NotFoundPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    }
  }
})

export default router
