import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import middleware from '../middleware'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Dashboard from '../components/common/Dashboard'

const routes = [
    { 
      path: '/login',
      name: 'login', 
      component: Login,
      meta: {
        middleware: [
          middleware.guest
        ]
      }
    },
    { 
      path: '/register', 
      name: 'Register', 
      component: Register,
      meta: {
        middleware: [
          middleware.guest
        ]
      }
    },
    { 
      path: '/dashboard', 
      name: 'dashboard', 
      component: Dashboard,
      meta: {
        middleware: [
          middleware.auth
        ]
      }
    },
  ]
  
  // 3. Create the router instance and pass the `routes` option
  // You can pass in additional options here, but let's
  // keep it simple for now.
  const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history',
  })

  /*
  * [@name]
  ** Description: 
  * [return]
  * [data]
  */
  function nextCheck(context, middleware, index) {
    
    const nextMiddleware = middleware[index];
    
    if(!nextMiddleware) return context.next;

    return (...paramaters) => {
      context.next(...paramaters);
      const nextMid = nextCheck(context, middleware, index + 1);

      nextMiddleware({...context, next: nextMid});
    }
  }

  router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {

      const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : to.meta.middleware

      const context = {
        to, 
        from, 
        next, 
        router
      }

      const nextMiddleware = nextCheck(context, middleware, 1);
      
      return middleware[0]({...context, next: nextMiddleware});
    }

    return next();
  })

  export default router