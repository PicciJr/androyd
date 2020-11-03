import '@/assets/css/tailwind.css'
import 'boxicons'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuesax from 'vuesax'
import VueTailwind from 'vue-tailwind'
import vClickOutside from 'vue-click-outside'
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

const vueTailwindSettings = {
  TDatepicker: {
    classes: {
      wrapper: 'bg-gray-300 text-white rounded-md',
      input: 'bg-gray-300 h-12 cursor-pointer',
      day:
        'text-sm rounded-full w-8 h-8 mx-auto hover:bg-green-500 disabled:opacity-25 disabled:cursor-not-allowed',
      selectedDay:
        'text-sm rounded-full w-8 h-8 mx-auto bg-green-500 text-white disabled:opacity-25 disabled:cursor-not-allowed',
      otherMonthDay:
        'text-sm rounded-full w-8 h-8 mx-auto hover:bg-gray-100 text-gray-200 disabled:opacity-25 disabled:cursor-not-allowed',
    },
  },
}
Vue.use(VueTailwind, vueTailwindSettings)

Vue.use(vClickOutside)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [{ path: '/', component: App }],
})

new Vue({ el: '#app', router, render: (h) => h(App) })
