import { createWebHistory, createRouter } from 'vue-router'
import AddVehicule from './components/AddVehicule.vue'
import Acceuil from './components/Acceuil.vue'

const routes = [{
  name: 'AddVehicule',
  path: '/AddVehicule',
  component: AddVehicule
}, {
  name: 'Acceuil',
  path: '/',
  component: Acceuil
}]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
