import '@/assets/css/tailwind.css'
import 'boxicons'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(VueRouter)
Vue.use(Vuesax, {
  colors: {
    primary: '#302C2D',
    success: '#68D391',
    danger: '#F56565',
    warning: 'rgb(255, 130, 0)',
    dark: '#191414',
    input: '#524E4E',
  },
})

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: App }],
})

new Vue({ el: '#app', router, render: (h) => h(App) })
