import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginAndRegisterView from '../views/LoginAndRegisterView.vue'
import ProductsView from '../views/ProductsView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import AdminView from '../views/AdminView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginAndRegisterView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/single_product',
    name: 'single_product',
    component: SingleProductView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
