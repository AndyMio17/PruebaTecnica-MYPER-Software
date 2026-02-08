import Home from '@/views/Home.vue'
import UsersView from '@/views/UsersView.vue';
import { createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/users', name: 'users', component: UsersView }
  ]
})

export default router;