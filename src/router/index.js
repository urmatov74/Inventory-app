import Vue from 'vue'
import VueRouter from 'vue-router'
import Cards from '../components/Cards.vue'
import Dashboard from '../views/Dashboard'
import Warehouse from '../views/Warehouse'
import Login from '../views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/production',
    name: 'Production',
    component: Cards
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/warehouse',
    name: 'Warehouse',
    component: Warehouse
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
