import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import Element from 'element-ui'
import axios from './utils/axios.config'
import Component from './components'
import 'element-ui/lib/theme-chalk/index.css'
import './style/index.less'
Vue.prototype.$axios = axios// axios插件给了vue对象原型的属性
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(Component)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
