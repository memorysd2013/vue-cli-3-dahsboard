import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue';
import login from './components/login.vue';
import dashboard from './dashboard.vue';
import tablelist from './tablelist.vue';
import userinfo from './userinfo.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component: login
    },
    {
      path: '/',
      component: App,
      children: [
        { path: '/dashboard', component: dashboard },
        { path: '/tablelist', component: tablelist },
        { path: '/userinfo', component: userinfo },
        { path:'*', redirect:'/login' },
      ]
    }
  ],
})
