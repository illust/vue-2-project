import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import dataV from '@jiaminghi/data-view'
import DigitalFlopDemo from './components/DigitalFlopDemo.vue'

import echarts from 'echarts'

Vue.component(DigitalFlopDemo.name,DigitalFlopDemo)

Vue.use(dataV)
// Vue.use(echarts)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
