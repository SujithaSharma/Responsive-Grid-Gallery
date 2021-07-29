import { createRouter, createWebHashHistory } from 'vue-router'
import Grid from "../components/Grid.vue"
import First from "../components/first.vue"
import property from"../components/Property.vue"
import frompopup from "../components/Frompopup.vue"

const routes = [
  {
    name: 'Grid',
    component: Grid
  },
  {
    name:'Frompopup',
    component:frompopup
  },
  {
    name:'property',
    component:property
  },
  {
    name: 'first',
    component : First
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

