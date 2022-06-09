import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import dataV from '@jiaminghi/data-view'
import NumberFlop from './components/NumberFlop'

import * as echarts from 'echarts'

import axios from 'axios'
Vue.prototype.$axios = axios

axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

Vue.component(NumberFlop.name,NumberFlop)

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
  import 'echarts/lib/chart/line'
  import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/title.js'
Vue.component('v-chart', ECharts)

Vue.use(dataV)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
