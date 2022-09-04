import { nextTick } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import { useUsersStore } from './stores/users'

// const requireAuth = async (to, from, next) => {
//   const userStore = useUsersStore()
//   const user = await userStore.currentUser()
//   if(user){
//     next()
//   }else{
//     next('/login')
//   }
// }

const routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue'),
    // beforeEnter: requireAuth
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('./views/Register.vue')
  }
]

const router = createRouter(
  {
    routes,
    history: createWebHistory()
  }
)

router.beforeEach(async (to, from)=>{
  const userStore = useUsersStore()
  userStore.loadingSession = true
  const currentUser = await userStore.currentUser()
  if( !currentUser && to.path !== '/login' && to.path !== '/register'){
    userStore.loadingSession = false
    return {path: '/login'}
  } else {
    userStore.loadingSession = false
  }
})

export default router;