import Vue from 'vue'
import App from './App.vue'
import md5 from 'js-md5'
import router from './router'
// import store from './store'

import { Lazyload, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Card, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, List, Tab, Tabs, GoodsAction, GoodsActionIcon, GoodsActionButton, SubmitBar, Toast } from 'vant'

Vue.use(Lazyload).use(Divider).use(Popup).use(Overlay).use(Loading).use(Dialog).use(Toast).use(ContactCard).use(Form).use(AddressEdit).use(AddressList).use(Field).use(CellGroup).use(Cell).use(SwipeCell).use(Icon).use(Stepper).use(Card).use(Button).use(Swipe).use(SwipeItem).use(PullRefresh).use(List).use(Tab).use(Tabs).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(SubmitBar).use(Checkbox).use(CheckboxGroup)
Vue.config.productionTip = false // 开发环境下，Vue 会提供很多警告来帮你对付常见的错误与陷阱。而在生产环境下，这些警告语句却没有用，反而会增加应用的体积。此外，有些警告检查还有一些小的运行时开销，这在生产环境模式下是可以避免的。

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')       // ???

Vue.prototype.$md5 = md5   // 全局注册，使用方式：this.$md5 
/**
 * $的作用：$ 是在 Vue 所有实例中都可用的 property 的一个简单约定。
 * 这样做会避免和已被定义的数据、方法、计算属性产生冲突。
 * 来源：https://cn.vuejs.org/v2/cookbook/adding-instance-properties.html#%E4%B8%BA%E5%AE%9E%E4%BE%8B-property-%E8%AE%BE%E7%BD%AE%E4%BD%9C%E7%94%A8%E5%9F%9F%E7%9A%84%E9%87%8D%E8%A6%81%E6%80%A7
 */