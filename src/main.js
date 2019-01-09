import Vue from 'vue'
import FastClick from 'fastclick'

import App from './App.vue'
import store from './store'
import router from './router'

import './config/rem'


if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

router.beforeEach((to, from, next) => {
  //console.log(to)
  next();
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
