import Vue from 'vue'
import store from './store';
import router from './router.js'
import App from './App.vue'

import echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
  const isLogin = localStorage.getItem('token') == 'ImLogin' ;
  if( isLogin ){
    next();
  } else {
    if( to.path !== '/login')
      next('/login');
    else
      next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
