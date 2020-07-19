import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './views/About.vue'
import Home from './views/Home.vue'
import RandomHand from './views/RandomHand.vue'
// import { component } from 'vue/types/umd'


Vue.use(VueRouter)

Vue.config.productionTip = false

export const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [{ path: '/about', component: About }, { path: '/', component: Home }, { path: '/randomHand', component: RandomHand }],
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
