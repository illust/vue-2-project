import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import dataV from '@jiaminghi/data-view'
import NumberFlop from './components/NumberFlop'

import * as echarts from 'echarts'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.component(NumberFlop.name,NumberFlop)

Vue.use(dataV)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
