import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '../pages/City/city'
import Detail from '../pages/Detail/detail'
import Login from '../pages/Login/Login'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/Detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
