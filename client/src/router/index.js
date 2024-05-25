import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Collections from '../views/Collections.vue'
import Contact from '../views/Contact.vue'
import Favorites from '../views/Favorites.vue'
import Cart from '../views/Cart.vue'
import Error404 from '../components/Error404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/collections',
      name: 'collections',
      component: Collections
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/:pathMatch(.*)*', // Ruta catch-all para manejar 404
      name: 'Error404',
      component: Error404,
    },
  ]
})

export default router
