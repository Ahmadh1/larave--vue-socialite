import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
const routes = [
    { path: '/login', component: Login },
    { path: '/register', component: Register }
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
  })

  export default router