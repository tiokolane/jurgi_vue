import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import DashboardPage from '../components/DashboardPage.vue'
import AddAnimal from '../components/AddAnimal.vue'
import MyAnimals from '../components/MyAnimals.vue'
import MyWeedings from '../components/MyWeedings.vue'
import AnimalDetails from '../components/AnimalDetails.vue'
import WeedingDetails from '../components/WeedingDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardPage,
      props: {}
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      props: {}
    },
    {
      path: '/my-animals',
      name: 'my-animals',
      component: MyAnimals,
      props: {}
    },
    {
      path: '/add-animal',
      name: 'add-animal',
      component: AddAnimal,
      props: {}
    },
    {
      path: '/animal-details',
      name: 'animal-details',
      component: AnimalDetails,
      props: {}
    },
    {
      path: '/my-weedings',
      name: 'my-weedings',
      component: MyWeedings,
      props: {}
    },
    {
      path: '/weeding-details',
      name: 'weeding-details',
      component: WeedingDetails,
      props: {}
    }
  ]
})