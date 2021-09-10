import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/NotFound.vue'
import Projects from '../views/Projects.vue'
import ProDetails from '../views/ProDetails.vue'
import Links from '../views/Links.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:About
    
  },
  {
    path:'/project',
    name:'Projects',
    component:Projects
  
  },
  {
    path:'/projects/:id',
    name:'ProDetails',
    component:ProDetails,
    props: true
  },
  //redirect
  {
    path:'/all-project',
    redirect:'/project'
  },
  {
    path:'/links',
    name:'Links',
    component:Links
  },
  //404
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component:NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router