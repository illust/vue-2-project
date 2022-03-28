import Vue from 'vue'
import App from '../src/components/HelloWorld.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
