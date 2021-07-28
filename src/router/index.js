import { createRouter, createWebHashHistory } from 'vue-router'
import Grid from "../components/Grid.vue"
import First from "../components/first.vue"
import property from"../components/Property.vue"
import frompopup from "../components/Frompopup.vue"

const routes = [
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
  {
    name: 'Grid',
    component: Grid
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

