import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'
import AddVehicule from '@/components/AddVehicule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil
    }, {
      path: '/AddVehicule',
      name: 'AddVehicule',
      component: AddVehicule,
    }
  ]
})
