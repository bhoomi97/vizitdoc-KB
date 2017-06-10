import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/'   , component: Landing },
    { path:'/home', component: Home },
  ]
})
