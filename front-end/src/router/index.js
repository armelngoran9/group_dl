import Vue from 'vue'
import Router from 'vue-router'
import Acceuil from '@/components/Acceuil'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Acceuil',
      component: Acceuil
    }
  ]
})
