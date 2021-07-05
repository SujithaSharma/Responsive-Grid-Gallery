import { createRouter, createWebHashHistory } from 'vue-router'
import hello from '../components/hello.vue'


const routes = [
  {
    name: 'hello',
    component: hello
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
