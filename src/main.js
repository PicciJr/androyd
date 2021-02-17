import '@/assets/css/tailwind.css'
import 'boxicons'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './Home.vue'
import OperationDetail from './OperationDetail.vue'
import StockDetail from './StockDetail.vue'
import NewOperation from './NewOperation.vue'
import Backtesting from './Backtesting.vue'
import Vuesax from 'vuesax'
import VueTailwind from 'vue-tailwind'
import vClickOutside from 'vue-click-outside'
import { roundTwoDecimals } from '../src/filters'
//Vuesax styles
import 'vuesax/dist/vuesax.css'

// Apollo Graphql
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

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
  TTable: {
    classes: {
      table: 'shadow min-w-full divide-y divide-gray-200',
    },
  },
}

// Apollo
const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://localhost:4000/',
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueTailwind, vueTailwindSettings)

Vue.use(VueApollo)

Vue.use(vClickOutside)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/detalle-operacion/:id', component: OperationDetail },
    { path: '/detalle-valor/:valor', component: StockDetail },
    { path: '/nueva-operacion/:valor', component: NewOperation },
    { path: '/backtesting', component: Backtesting },
  ],
})
Vue.use(VueRouter)

Vue.filter('roundTwoDecimals', roundTwoDecimals)

new Vue({ el: '#app', apolloProvider, router, render: (h) => h(App) })
