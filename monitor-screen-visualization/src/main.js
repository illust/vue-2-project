import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import dataV from '@jiaminghi/data-view'
import DigitalFlopDemo from './components/DigitalFlopDemo.vue'
Vue.component(DigitalFlopDemo.name,DigitalFlopDemo)

Vue.use(dataV)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
